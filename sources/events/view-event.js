import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Header } from '../components'

export default class ViewEvent extends Component {
	constructor(props) {
		super(props);

		this.eventIndex = props.navigation.getParam('index', null);
	}

	render() {
		return (
			<View style={styles.container}>
				<Header title="Lihat Kegiatan" centerTitle backButton navigation={this.props.navigation} />
				<Text>ViewEvent {this.eventIndex}</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
})
