import React from 'react'
import { Text, StyleSheet, View, StatusBar } from 'react-native'
import { HeaderButton } from './header-buttons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const Header = (props) => {
	const navigateBack = () => {
		if (props.navigation) {
			props.navigation.goBack();
		}
	}
	
	return (
		<View style={styles.header}>
			<StatusBar backgroundColor='#7CB342' barStyle='light-content' />
			
			<View style={[styles.side, !props.leftComponent && !props.centerTitle && !props.backButton ? {
					minWidth: 0, paddingHorizontal: 0, width: 24
				} : null]}>
				{ props.backButton ? (
					<HeaderButton {...props} onPress={navigateBack} component={
						<MaterialIcons name='arrow-back' style={styles.icon} size={20} />
					} />
				  ) : props.leftComponent
				}
			</View>

			<View style={[styles.center, props.centerTitle ? {alignItems: 'center'} : null]}>
				{ props.titleComponent ? props.titleComponent : (
					<Text style={styles.title}>{props.title}</Text>
				) }
			</View>

			<View style={styles.side}>
				{props.rightComponent}
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	header: {
		flexDirection: 'row', alignItems: 'center', height: 55,
		backgroundColor: '#fff', elevation: 3 //8BC34A
	},
	side: {
		minWidth: 60, alignItems: 'center'
	},
	center: {
		flex: 1
	},
	title: {
		fontSize: 18, color: '#689F38'
	},
	icon: {
		color: '#689F38'
	}
})

export default Header
