import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Header } from '../components'

export default class UploadPhoto extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Header title="Unggah Foto" centerTitle backButton navigation={this.props.navigation} />
				<Text>UploadPhoto</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
})
