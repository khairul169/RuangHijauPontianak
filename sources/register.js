import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchRegister } from './actions/auth'
import { StyleSheet, View, Image } from 'react-native'
import { Header } from './components'
import { UserInput, SubmitButton } from './auth'

const Register = (props) => {
	const [fullName, setFullName] = useState('');
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const register = () => {
		props.fetchRegister({
			fullName,
			username,
			password
		});
	}

	// auth props updated
	useEffect(() => {
		if (props.auth.loggedIn) {
			props.navigation.replace('Index');
		}
	}, [props.auth]);

	return (
		<View style={styles.container}>
			<Header title="Daftar" centerTitle backButton navigation={props.navigation} />

			<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
				<Image source={require('../assets/app-icon.png')} style={{width: 128, height: 128}} />
			</View>

			<View style={{padding: 16}}>
				<UserInput placeholder='Nama Lengkap' value={fullName} onChangeText={setFullName} autoCapitalize />
				<UserInput placeholder='Nama Pengguna' value={username} onChangeText={setUsername} />
				<UserInput placeholder='Kata Sandi' value={password} onChangeText={setPassword} password />

				<SubmitButton title='DAFTAR' onPress={register} />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
})

const mapStateToProps = (state) => ({
	auth: state.auth
})

const mapDispatchToProps = {
	fetchRegister
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)

