import React, { Component } from 'react'
import { connect } from 'react-redux'
import { clearState } from './actions/auth'
import DataStorage from './data-storage'
import { NavigationActions } from 'react-navigation'

import { Text, StyleSheet, View, ScrollView } from 'react-native'
import { Header, TouchableImage, HeaderButton } from './components'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Test = (props) => {
	return (
		<TouchableImage source={require('../assets/tanam_pohon.jpg')}
			onPress={props.onPress}
			style={{width: '50%', height: 150}} />
	)
}

class Account extends Component {
	viewPhoto = (id) => {
		this.props.navigation.navigate('ViewPhoto', {
			index: id
		});
	}

	logout = async () => {
		await DataStorage.removeData(DataStorage.sessionId);
		this.props.clearAuthState();

		// go back to auth screen
		this.props.navigation.reset([
			NavigationActions.navigate({routeName: 'Auth'})
		], 0);
	}

	render() {
		return (
			<View style={styles.container}>
				<Header title="Akun" centerTitle
					leftComponent={
						<MaterialCommunityIcons name='account-tie' style={{color: '#689F38'}} size={20} />
					}
					rightComponent={
						<HeaderButton onPress={this.logout} component={
							<MaterialCommunityIcons name='logout' style={{color: '#686868'}} size={20} />
						} />
					} />
				
				<ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
					<View style={{padding: 16, flexDirection: 'row', alignItems: 'center',
						backgroundColor:'#fff', zIndex: -1}}>
						<View style={{width: 96, height: 96, borderRadius: 96/2, backgroundColor: '#ddd'}} />

						<View style={{flex: 1, marginLeft: 24}}>
							<Text style={{fontSize: 16, color: '#111'}}>Khairul Hidayat</Text>
							<Text style={{fontSize: 12, color: '#424242', marginTop: 4}}>khairul169 • Siantan Hilir</Text>

							<View style={{height: 1, borderBottomWidth: 1, borderBottomColor: '#eee', marginVertical: 8}} />

							<View style={{flexDirection: 'row', alignItems: 'center'}}>
								<MaterialCommunityIcons name='leaf' style={{color: '#333'}} size={14} />
								<Text style={{marginLeft: 10, fontSize: 14}}>12</Text>

								<MaterialCommunityIcons name='heart' style={{color: '#333', marginLeft: 20}} size={14} />
								<Text style={{marginLeft: 10, fontSize: 14}}>80</Text>
							</View>
						</View>
					</View>

					<View style={{elevation: 5, zIndex: 1, backgroundColor: '#fff', flexDirection: 'row', flexWrap: 'wrap'}}>
						<Test onPress={() => this.viewPhoto(0)} />
						<Test onPress={() => this.viewPhoto(1)} />
						<Test onPress={() => this.viewPhoto(2)} />
						<Test onPress={() => this.viewPhoto(3)} />
					</View>
				</ScrollView>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
})

const mapDispatchToProps = {
	clearAuthState: clearState
}

export default connect(null, mapDispatchToProps)(Account)

