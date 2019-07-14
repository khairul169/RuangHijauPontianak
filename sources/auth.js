import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchLogin, fetchRegister, validateSession } from './actions/auth'
import { StyleSheet, View, TextInput, StatusBar, TouchableOpacity, Text } from 'react-native'

const UserInput = (props) => {
	return (
		<View style={styles.userInput}>
			<TextInput {...props} autoCompleteType='off' textContentType={props.password ? 'password' : 'username'}
				secureTextEntry={props.password ? true : false} autoCapitalize={props.autoCapitalize ? 'words' : 'none'}
				style={{paddingHorizontal: 16, paddingVertical: 6, fontSize: 16, color: '#333'}} />
		</View>
	)
}

const SubmitButton = (props) => {
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

		props.fetchLogin(username, password);
	}

	const { auth, navigation } = props;

	// component mount
	useEffect(() => {
		props.validateSession();
	}, []);

	// props updated
	useEffect(() => {
		if (auth.loggedIn) {
			navigation.replace('Index');
		}
	});

	return (
		<View style={styles.container}>
			<StatusBar backgroundColor='#333' barStyle='light-content' />

			<View style={{flex: 1}}>
			</View>

			<View style={{padding: 16}}>
				<UserInput placeholder='Username' value={username} onChangeText={setUsername} />
				<UserInput placeholder='Password' value={password} onChangeText={setPassword} password />

				<Text style={{textAlign: 'center', fontSize: 14, color: '#727272'}}>Daftar Baru</Text>
			</View>

			<SubmitButton title='MASUK' onPress={login} />
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
	fetchRegister,
	validateSession
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)

