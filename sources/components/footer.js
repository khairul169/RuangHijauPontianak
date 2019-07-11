import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const TabItem = (props) => {
	return (
		<TouchableOpacity style={styles.tabItem} onPress={props.onPress}>
			<Icon style={[styles.tabIcon, props.active ? styles.tabIconActive : null]}
				name={props.icon ? props.icon : 'heart'} />
		</TouchableOpacity>
	)
}

export default class Footer extends Component {
	navigateTo = (routeName) => {
		this.props.navigation.navigate(routeName);
	}

	render() {
		const navigationState = this.props.navigation.state;
		const { tabIcons } = this.props;

		return (
			<View style={styles.container}>
				{ navigationState.routes.map((item, index) => (
					<TabItem key={index}
						icon={tabIcons && index < tabIcons.length ? tabIcons[index] : 'home'}
						active={navigationState.index === index}
						onPress={() => this.navigateTo(item.routeName)} />
				)) }
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
