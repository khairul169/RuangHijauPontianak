import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Header } from '../components'

export default class ViewPhoto extends Component {
	constructor(props) {
		super(props);

		this.photoIndex = props.navigation.getParam('index', null);
	}

	render() {
		return (
			<View style={styles.container}>
				<Header title="Lihat Foto" centerTitle backButton navigation={this.props.navigation} />
				<Text>ViewPhoto {this.photoIndex}</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
})
