import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchHome } from './actions/home'

import { Text, StyleSheet, View, ScrollView, FlatList, Dimensions } from 'react-native'
import { Header, PosterLayout, EventCard, TouchableImage } from './components'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const StatsPenghijauan = (props) => {
	return (
		<View style={{flex: 1, flexDirection: 'row', alignItems: 'center', backgroundColor: '#8BC34A',
			paddingHorizontal: 16, paddingVertical: 32}}>
			
			<View style={{flex: 1}}>
				<View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
					<Text style={{color: '#fff', fontSize: 36, textAlign: 'center', minWidth: 100}}>
						{props.penghijauan}
					</Text>

					<View style={{flex: 1, marginLeft: 16}}>
						<Text style={{color: '#fff', fontSize: 18}}>Penghijauan</Text>
						<Text style={{color: '#fff', marginTop: 4, fontSize: 14}}>Telah Dilakukan</Text>
					</View>
				</View>
			</View>

			<View style={{marginLeft: 16, alignSelf: 'stretch', justifyContent: 'center',
				paddingLeft: 16, borderLeftColor: '#fff', borderLeftWidth: 1}}>
				<MaterialCommunityIcons name='leaf' style={{color: '#fff'}} size={32} />
			</View>
		</View>
	)
}

const HighlightedFeeds = (props) => {
	const cardWidth = Math.max(Dimensions.get('window').width * 0.6, 250);

	const viewPhoto = (id) => {
		props.navigation.navigate('ViewPhoto', {
			index: id
		});
	}

	const renderItems = ({item, index}) => (
		<View style={[styles.uploadsCard, {width: cardWidth}]}>
			<TouchableImage onPress={() => viewPhoto(item.id)}
				style={{flex: 1, backgroundColor: '#eee'}}
				source={{uri: item.image}} />
			
			<View style={{paddingHorizontal: 8, paddingVertical: 4, flexDirection: 'row'}}>
				<PosterLayout photoSize={28}
					title={item.name}
					subtitle={item.username} />
			</View>
		</View>
	)

	return (
		<View>
			<Text style={styles.headerTitle}>
				Unggahan Tersorot
			</Text>
			<FlatList horizontal={true} showsHorizontalScrollIndicator={false}
				data={props.unggahan} renderItem={renderItems} keyExtractor={(item, index) => index.toString()}
				contentContainerStyle={{
					height: 200, alignItems: 'stretch', paddingHorizontal: 8
				}} />
		</View>
	)
}

const UpcomingEvent = (props) => {
	const viewEvent = () => {
		props.navigation.navigate('ViewEvent', {
			index: props.eventId
		});
	}

	return (
		<View>
			<Text style={styles.headerTitle}>Kegiatan Akan Datang</Text>
			
			<View style={styles.eventCard}>
				<EventCard style={{marginTop: 8}} onPress={viewEvent} />
			</View>
		</View>
	)
}

class Home extends Component {
	componentDidMount() {
		this.props.fetchHome();
	}

	render() {
		return (
			<View style={styles.container}>
				<Header title="Ruang Hijau Pontianak" centerTitle
					leftComponent={
						<MaterialIcons name='home' style={{color: '#689F38'}} size={20} />
					}
					/*rightComponent={
						<MaterialIcons name='notifications' style={{color: '#686868'}} size={18} />
					}*/ />

				<ScrollView style={styles.content}>
					<StatsPenghijauan {...this.props} />
					<HighlightedFeeds {...this.props} />
					<UpcomingEvent {...this.props} />
				</ScrollView>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	content: {
		flex: 1, backgroundColor: '#fff', zIndex: -1
	},
	headerTitle: {
		fontSize: 18, color: '#333', marginHorizontal: 16, marginTop: 20, marginBottom: 4
	},
	uploadsCard: {
		backgroundColor: '#fff', elevation: 2, margin: 8, flex: 1
	},
	eventCard: {
	}
})

const mapStateToProps = (state) => ({
	penghijauan: state.home.penghijauan,
	unggahan: state.home.unggahan,
	kegiatan: state.home.kegiatan
})

const mapDispatchToProps = {
	fetchHome
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
