import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const TabItem = (props) => {
	return (
		<View style={styles.tabItem}>
			<Icon style={[styles.tabIcon, props.active ? styles.tabIconActive : null]}
				name={props.icon ? props.icon : 'heart'} />
		</View>
	)
}

export default class Footer extends Component {
	render() {
		return (
			<View style={styles.container}>
				<TabItem icon='home' active />
				<TabItem icon='google-hangouts' />
				<TabItem icon='image-filter-center-focus' />
				<TabItem icon='leaf' />
				<TabItem icon='account-circle' />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row', alignItems: 'stretch',
		backgroundColor: '#fff', elevation: 10, height: 42
	},
	tabItem: {
		flex: 1, alignItems: 'center', justifyContent: 'center'
	},
	tabIcon: {
		color: '#C5E1A5', fontSize: 18
	},
	tabIconActive: {
		color: '#558B2F'
	}
})
