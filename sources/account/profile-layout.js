import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import API from '../actions/api'

import { View, Text, StyleSheet, ScrollView, Dimensions, RefreshControl } from 'react-native'
import { TouchableImage } from '../components'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Test = (props) => {
	return (
		<TouchableImage source={props.source}
			onPress={props.onPress}
			style={{width: props.size, height: props.size}} />
	)
}

const ProfileLayout = (props) => {
	const initialUserState = {
		profile: null,
		posts: [],
		post_count: 0,
		likes: 0
	};

	const [refreshing, setRefreshing] = useState(true);
	const [imgSize, setImgSize] = useState(0);
	const [user, setUser] = useState(initialUserState);

	const { profile, posts, post_count, likes } = user;

	const onLayout = () => {
		const window = Dimensions.get('window');
		const colls = (window.width < window.height) ? 2 : 3;
		setImgSize(Math.floor(window.width / colls));
	}

	const viewPhoto = (id) => {
		props.navigation.push('ViewPhoto', {
			index: id
		});
	}

	const refresh = async () => {
		setRefreshing(true);

		const result = await API.get(props.auth, 'profile', 'view', props.userId ? {
			id: props.userId
		} : null);

		if (result && result.status === 0) {
			setUser(result);
			props.onUserLoaded && props.onUserLoaded(result.profile.name);
		} else {
			setUser(initialUserState);
		}

		setRefreshing(false);
	}

	useEffect(() => {
		refresh();
	}, []);

	return (
		<ScrollView style={styles.container}
			refreshControl={
				<RefreshControl refreshing={refreshing} onRefresh={refresh} />
			}>
			<View style={{padding: 16, flexDirection: 'row', alignItems: 'center',
				backgroundColor:'#fff', zIndex: -1}}>

				<View style={{width: 96, height: 96, borderRadius: 96/2, backgroundColor: '#ddd'}} />

				<View style={{flex: 1, marginLeft: 24}}>
					<Text style={{fontSize: 16, color: '#111'}}>
						{profile ? profile.name : null}
					</Text>
					<Text style={{fontSize: 12, color: '#424242', marginTop: 4}}>
						{profile ? (profile.location ? `${profile.username} • ${profile.location}` : profile.username) : null}
					</Text>

					<View style={{height: 1, borderBottomWidth: 1, borderBottomColor: '#eee', marginVertical: 8}} />

					<View style={{flexDirection: 'row', alignItems: 'center'}}>
						<MaterialCommunityIcons name='leaf' style={{color: '#333'}} size={14} />
						<Text style={{marginLeft: 10, fontSize: 14}}>
							{post_count ? post_count : 0}
						</Text>

						<MaterialCommunityIcons name='heart' style={{color: '#333', marginLeft: 20}} size={14} />
						<Text style={{marginLeft: 10, fontSize: 14}}>
							{likes ? likes : 0}
						</Text>
					</View>
				</View>
			</View>

			<View onLayout={onLayout} style={{elevation: 5, zIndex: 1, backgroundColor: '#fff', flexDirection: 'row', flexWrap: 'wrap'}}>
				{ posts.map((item, index) => (
					<Test key={index}
						size={imgSize}
						source={{uri: item.image}}
						onPress={() => viewPhoto(item.id)} />
				)) }
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
})

const mapStateToProps = (state) => ({
	auth: state.auth
})

export default connect(mapStateToProps)(ProfileLayout)
