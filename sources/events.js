import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Header } from './components'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default class Events extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Header title="Kegiatan" centerTitle
					leftComponent={
						<MaterialIcons name='event-note' style={{color: '#689F38'}} size={20} />
					} />
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
