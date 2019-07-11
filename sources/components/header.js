import React, { Component } from 'react'
import { Text, StyleSheet, View, StatusBar } from 'react-native'

export default class Header extends Component {
	render() {
		return (
			<View style={styles.header}>
				<StatusBar backgroundColor='#7CB342' barStyle='light-content' />
				
				<View style={styles.side}>
					{this.props.leftComponent}
				</View>

				<View style={styles.center}>
					<Text style={styles.title}>{this.props.title}</Text>
				</View>

				<View style={styles.side}>
					{this.props.rightComponent}
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	header: {
		flexDirection: 'row', alignItems: 'center', height: 55,
		backgroundColor: '#fff', elevation: 3 //8BC34A
	},
	side: {
		paddingHorizontal: 16, minWidth: 60, alignItems: 'center'
	},
	center: {
		flex: 1
	},
	title: {
		fontSize: 18, color: '#689F38'
	}
})
