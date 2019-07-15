import React, { Component } from 'react'
import { connect } from 'react-redux'
import API from '../actions/api'
import { Text, StyleSheet, View, Dimensions, ScrollView, TouchableHighlight, TextInput } from 'react-native'
import { Header, PosterLayout, HeaderButton, Image, LoadingLayout } from '../components'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const ActionButton = (props) => {
	return (
		<TouchableHighlight style={[{flex: props.noFlex ? null : 1, justifyContent: 'center'}, props.style]}
			onPress={props.onPress} underlayColor={null}>
			
			<View style={[{alignItems: 'center', justifyContent: 'center', flexDirection: 'row'},
				props.leftBorder ? {borderLeftColor: '#eee', borderLeftWidth: 1} : null]}>
				<MaterialCommunityIcons name={props.icon}
					style={{color: props.iconColor ? props.iconColor : '#828282'}} size={18} />

				{ props.label && (
					<Text style={{fontSize: 14, color: '#424242', marginLeft: 10}}>{props.label}</Text>
				) }
			</View>
		</TouchableHighlight>
	)
}

class ViewPhoto extends Component {
	state = {
		isLoading: false,
		post: null
	}

	postId = null;

	fetchData = async () => {
		// set loading
		this.setState({ isLoading: true });

		// fetch data
		const result = await API.get(this.props.auth, 'post', 'get_post', {id: this.postId});
		
		if (result && result.status === 0) {
			// set post data
			this.setState({
				isLoading: false,
				post: result.post
			});
		} else {
			this.setState({
				isLoading: false,
				post: null
			});
		}
	}

	likePost = async () => {
		if (!this.state.post) {
			return;
		}

		// fetch data
		const result = await API.get(this.props.auth, 'post', 'like', {id: this.postId});
		
		if (result && result.status === 0) {
			// set post data
			this.setState({
				post: {
					...this.state.post,
					likes: result.likes,
					liked: result.liked
				}
			});
		}
	}

	componentDidMount() {
		this.postId = this.props.navigation.getParam('index', null);
		this.fetchData();
	}

	viewUserProfile = () => {
		const { post } = this.state;

		if (post && post.user) {
			this.props.navigation.navigate('ViewUser', {
				id: post.user
			});
		}
	}

	render() {
		if (this.props.isLoading) {
			return <LoadingLayout />
		}

		const { post } = this.state;
		const window = Dimensions.get('window');

		return (
			<View style={styles.container}>
				<Header backButton navigation={this.props.navigation}
					title="Lihat Foto" centerTitle
					rightComponent={
						<HeaderButton component={
							<MaterialCommunityIcons name='dots-vertical' style={{color: '#686868'}} size={18} />
						} />
					} />
				
				<ScrollView style={{flex: 1}}>
					<View style={{padding: 16}}>
						<PosterLayout
							title={post ? post.name : null}
							subtitle={post ? (post.location ? `${post.location} • ${post.date}` : post.date) : null}
							onPress={this.viewUserProfile} />
						
						{ post && post.desc ? (
							<Text style={styles.postDescription}>
								{post.desc}
							</Text>
						) : null }
					</View>

					{ post && (
						<View style={{backgroundColor: '#eee', alignItems: 'center'}}>
							<Image
								source={{uri: post.image}}
								width={window.width}
								height={(window.height * 0.6)} />
						</View>
					) }

					<View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 16}}>
						<TextInput placeholder="Berikan komentar.." style={{flex: 1, marginLeft: 16,
							borderColor: '#eee', borderWidth: 1, borderRadius: 10,
							paddingVertical: 4, paddingHorizontal: 16}} />
						<ActionButton icon='comment-plus' noFlex style={{width: 60}} />
					</View>
				</ScrollView>

				<View style={{flexDirection: 'row', alignItems: 'stretch', height: 50,
					borderTopColor: '#eee', borderTopWidth: 1,
					borderBottomColor: '#eee', borderBottomWidth: 1}}>
					
					<ActionButton icon='heart'
						label={post ? post.likes.toString() : null}
						iconColor={post && post.liked ? '#ef5350' : null}
						onPress={this.likePost} />
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	postDescription: {
		fontSize: 14, color: '#424242', marginTop: 16, lineHeight: 20
	}
})

const mapStateToProps = (state) => ({
	auth: state.auth
})

export default connect(mapStateToProps)(ViewPhoto)
