import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, StatusBar } from 'react-native'
import { Header, PhotoListItem } from './components'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const Test = () => {
	return (
		<ScrollView horizontal={true} style={{backgroundColor: '#fff', marginVertical: 10}} showsHorizontalScrollIndicator={false}
			contentContainerStyle={{height: 80, alignItems: 'stretch', padding: 10}}>
			<View style={{flex: 1, width: 100, backgroundColor: '#ddd', marginRight: 10}}>
				<Text>Test</Text>
			</View>
			<View style={{flex: 1, width: 100, backgroundColor: '#ddd', marginRight: 10}}>
				<Text>Test</Text>
			</View>
			<View style={{flex: 1, width: 100, backgroundColor: '#ddd', marginRight: 10}}>
				<Text>Test</Text>
			</View>
			<View style={{flex: 1, width: 100, backgroundColor: '#ddd', marginRight: 10}}>
				<Text>Test</Text>
			</View>
			<View style={{flex: 1, width: 100, backgroundColor: '#ddd', marginRight: 10}}>
				<Text>Test</Text>
			</View>
		</ScrollView>
	)
}

export default class Home extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Header title="Ruang Hijau Pontianak" centerTitle
					leftComponent={
						<MaterialCommunityIcons name='leaf' style={{color: '#689F38'}} size={20} />
					}
					rightComponent={
						<MaterialIcons name='notifications' style={{color: '#686868'}} size={18} />
					} />

				<ScrollView style={styles.content}>
					<Test />
					<Test />
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
		flex: 1, backgroundColor: '#fff', zIndex: -1
	}
})
