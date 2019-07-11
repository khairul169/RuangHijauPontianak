import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Header } from './components'

export default class Events extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Header title="Events" />
				<Text>Events</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
})
