import React, { Component } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import { Header, PhotoListItem, HeaderButton } from './components'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default class Feeds extends Component {
	state = {
		posts: [1, 2, 3, 4],
		refreshing: false
	}

	renderPhotoItem = ({index}) => (
		<PhotoListItem onImagePress={() => this.viewPhoto(index)}
			style={index > 0 ? {marginTop: 0} : null}
			liked={index === 1} />
	)

	viewPhoto = (id) => {
		this.props.navigation.navigate('ViewPhoto', {
			index: id
		});
	}

	onRefresh = () => {
		this.setState({
			refreshing: false
		});
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
					<FlatList ref={ref => this._feedList = ref} style={{flex: 1}} data={this.state.posts}
						keyExtractor={(item, index) => index.toString()}
						renderItem={this.renderPhotoItem}
						refreshing={this.state.refreshing}
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
