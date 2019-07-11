import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Header } from './components'

export default class Account extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Header title="Account" />
				<Text>Account</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
})
