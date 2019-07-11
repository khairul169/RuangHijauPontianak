import React from 'react'
import { View, TouchableOpacity } from 'react-native'

const containerStyle = {
	padding: 16
};

const HeaderButton = (props) => {
	return (
		<TouchableOpacity style={containerStyle} onPress={props.onPress}>
			{props.component}
		</TouchableOpacity>
	)
}

const HeaderItem = (props) => {
	return (
		<View style={containerStyle} onPress={props.onPress}>
			{props.component}
		</View>
	)
}

export { HeaderButton, HeaderItem }
