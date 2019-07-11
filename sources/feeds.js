import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native'
import { Header, PhotoListItem, HeaderButton } from './components'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default class Feeds extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Header title="Postingan" centerTitle
					leftComponent={
						<FontAwesome name='comments' style={{color: '#689F38'}} size={20} />
					}
					rightComponent={
						<HeaderButton onPress={() => this.props.navigation.navigate('UploadPhoto')} component={
							<MaterialIcons name='add-circle' style={{color: '#686868'}} size={20} />
						} />
					} />

				<ScrollView style={styles.content}>
					<PhotoListItem onImagePress={() => this.props.navigation.navigate('Test')} />
					<PhotoListItem />
					<PhotoListItem />
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
		flex: 1, backgroundColor: '#f2f2f2', zIndex: -1
	}
})
