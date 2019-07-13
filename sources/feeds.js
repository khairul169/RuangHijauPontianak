import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchFeeds } from './actions/feeds'

import { StyleSheet, View, Text, FlatList } from 'react-native'
import { Header, PhotoListItem, HeaderButton } from './components'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

class Feeds extends Component {
	componentDidMount() {
		this.props.fetchFeeds();
	}

	renderPhotoItem = ({item, index}) => (
		<PhotoListItem onImagePress={() => this.viewPhoto(item.id)}
			style={index > 0 ? {marginTop: 0} : null}
			image={{uri: item.image}}
			name={item.name}
			username={item.username}
			likes={item.likes.toString()}
			liked={item.liked} />
	)

	viewPhoto = (id) => {
		this.props.navigation.navigate('ViewPhoto', {
			index: id
		});
	}

	onRefresh = () => {
		this.props.fetchFeeds();
	}

	onEndReached = () => {
	}
	
	render() {
		return (
			<View style={styles.container}>
				<Header title="Hijau Kote Kite" centerTitle
					leftComponent={
						<HeaderButton onPress={() => this._feedList.scrollToOffset({offset: 0})} component={
								<FontAwesome name='comments' style={{color: '#689F38'}} size={20} />
							} />
					}
					rightComponent={
						<HeaderButton onPress={() => this.props.navigation.navigate('UploadPhoto')} component={
							<MaterialIcons name='add-circle' style={{color: '#686868'}} size={20} />
						} />
					} />

				<View style={styles.content}>
					<FlatList ref={ref => this._feedList = ref} style={{flex: 1}} data={this.props.feeds.posts}
						keyExtractor={(item, index) => index.toString()}
						renderItem={this.renderPhotoItem}
						refreshing={this.props.feeds.isLoading}
						onRefresh={this.onRefresh}
						onEndReached={this.onEndReached} />
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	content: {
		flex: 1, backgroundColor: '#f2f2f2', zIndex: -1
	}
})

const mapStateToProps = (state) => ({
	feeds: state.feeds
})

const mapDispatchToProps = {
	fetchFeeds
}

export default connect(mapStateToProps, mapDispatchToProps)(Feeds)
