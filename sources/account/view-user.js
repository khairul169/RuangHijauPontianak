import React, { useState } from 'react'
import { View } from 'react-native'
import { Header } from '../components'
import ProfileLayout from './profile-layout'

const ViewUser = (props) => {
	const userId = props.navigation.getParam('id');
	const [headerTitle, setHeaderTitle] = useState('Akun Saya');

	return (
		<View style={{flex: 1}}>
			<Header title={headerTitle} centerTitle backButton navigation={props.navigation} />
			<ProfileLayout userId={userId} navigation={props.navigation}
				onUserLoaded={(name) => setHeaderTitle(name)} />
		</View>
	)
}

export default ViewUser

