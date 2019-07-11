import React, { Component } from 'react'
import { Text, StyleSheet, View, StatusBar } from 'react-native'
import { HeaderButton } from './header-buttons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default class Header extends Component {
	navigateBack = () => {
		this.props.navigation.goBack();
	}
	
	render() {
		return (
			<View style={styles.header}>
				<StatusBar backgroundColor='#7CB342' barStyle='light-content' />
				
				<View style={[styles.side, !this.props.leftComponent && !this.props.centerTitle && !this.props.backButton ? {
						minWidth: 0, paddingHorizontal: 0, width: 24
					} : null]}>
					{ this.props.backButton ? (
						<HeaderButton {...this.props} onPress={this.navigateBack} component={
							<MaterialIcons name='arrow-back' style={styles.icon} size={20} />
						} />
					  ) : this.props.leftComponent
					}
				</View>

				<View style={[styles.center, this.props.centerTitle ? {alignItems: 'center'} : null]}>
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
