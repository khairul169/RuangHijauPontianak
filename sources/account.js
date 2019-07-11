import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Header } from './components'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default class Account extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Header title="Akun" centerTitle
					leftComponent={
						<MaterialCommunityIcons name='account-tie' style={{color: '#689F38'}} size={20} />
					} />
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
