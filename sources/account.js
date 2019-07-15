import React, { Component } from 'react'
import { connect } from 'react-redux'
import { clearState } from './actions/auth'
import DataStorage from './data-storage'
import { NavigationActions } from 'react-navigation'

import { StyleSheet, View } from 'react-native'
import { Header, HeaderButton } from './components'
import ProfileLayout from './account/profile-layout'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

class Account extends Component {
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
				<Header title="Akun Saya" centerTitle
					leftComponent={
						<MaterialCommunityIcons name='account-tie' style={{color: '#689F38'}} size={20} />
					}
					rightComponent={
						<HeaderButton onPress={this.logout} component={
							<MaterialCommunityIcons name='logout' style={{color: '#686868'}} size={20} />
						} />
					} />
				
				<ProfileLayout navigation={this.props.navigation} />
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

