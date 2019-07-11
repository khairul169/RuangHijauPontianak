import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'
import { Header, PhotoListItem, Footer } from './components'
import Icon from 'react-native-vector-icons/MaterialIcons'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'

export default class Home extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Header
					leftComponent={
						<MaterialIcon name='leaf' style={{color: '#689F38'}} size={20} />
					}
					title="Ruang Hijau Pontianak"
					rightComponent={
						<Icon name='notifications' style={{color: '#686868'}} size={20} />
					} />

				<ScrollView style={styles.content}>
					<PhotoListItem />
					<PhotoListItem />
					<PhotoListItem />
				</ScrollView>

				<Footer />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1, backgroundColor: '#fff'
	},
	content: {
		flex: 1, backgroundColor: '#f2f2f2', zIndex: -1
	}
})
