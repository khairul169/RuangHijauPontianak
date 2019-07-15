import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchLogin, validateSession } from './actions/auth'
import { StyleSheet, View, TextInput, StatusBar, TouchableOpacity, Text, Image } from 'react-native'
import { LoadingLayout } from './components'

export const UserInput = (props) => {
	return (
		<View style={styles.userInput}>
			<TextInput {...props} autoCompleteType='off' textContentType={props.password ? 'password' : 'username'}
				secureTextEntry={props.password ? true : false} autoCapitalize={props.autoCapitalize ? 'words' : 'none'}
				style={{paddingHorizontal: 16, paddingVertical: 6, fontSize: 16, color: '#333'}} />
		</View>
	)
}

export const SubmitButton = (props) => {
	return (
		<TouchableOpacity style={[styles.submitButton, props.style]} onPress={props.onPress}>
			<Text style={{fontSize: 16, textAlign: 'center', color: '#fff'}}>{props.title}</Text>
		</TouchableOpacity>
	)
}

const Auth = (props) => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const login = () => {
		if (props.auth && props.auth.isLoading) {
			return;
		}

		props.fetchLogin({
			username, password
		});
	}

	const { auth, navigation } = props;

	// component mount
	useEffect(() => {
		props.validateSession();
	}, []);

	// props updated
	useEffect(() => {
		if (auth.loaded && auth.sessionId) {
			navigation.replace('Index');
		}
	}, [auth]);

	if (!auth.loaded || auth.sessionId) {
		return (
			<LoadingLayout />
		)
	}

	return (
		<View style={styles.container}>
			<StatusBar backgroundColor='#7CB342' barStyle='light-content' />

			<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
				<Image source={require('../assets/app-icon.png')} style={{width: 128, height: 128}} />
				<Text style={{fontSize: 16, color: '#424242', marginTop: 10}}>RUMAH HIJAU PONTIANAK</Text>
			</View>

			<View style={{padding: 16}}>
				<UserInput placeholder='Nama Pengguna' value={username} onChangeText={setUsername} />
				<UserInput placeholder='Kata Sandi' value={password} onChangeText={setPassword} password />

				<SubmitButton title='MASUK' onPress={login} />

				<TouchableOpacity style={{padding: 16, marginTop: 16}}
					onPress={() => props.navigation.navigate('Register')}>
					<Text style={{textAlign: 'center', fontSize: 14, color: '#727272'}}>Daftar Baru</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	userInput: {
		borderColor: '#ddd', borderWidth: 1, marginBottom: 16
	},
	submitButton: {
		backgroundColor: '#7CB342', paddingHorizontal: 16, paddingVertical: 12
	}
})

const mapStateToProps = (state) => ({
	auth: state.auth
})

const mapDispatchToProps = {
	fetchLogin,
	validateSession
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)

