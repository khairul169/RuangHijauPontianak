import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Header } from './components'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class Home extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Header title="Ruang Hijau Pontianak" rightComponent={
					<Icon name='notifications' style={{color: '#fff'}} size={20} />
				} />

				<Text>Home</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1, backgroundColor: '#fff'
	}
})
