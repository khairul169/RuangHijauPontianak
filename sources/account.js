import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'
import { Header, TouchableImage } from './components'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Test = (props) => {
	return (
		<TouchableImage source={require('../assets/tanam_pohon.jpg')}
			onPress={props.onPress}
			style={{width: '50%', height: 150}} />
	)
}

export default class Account extends Component {
	viewPhoto = (id) => {
		this.props.navigation.navigate('ViewPhoto', {
			index: id
		});
	}

	render() {
		return (
			<View style={styles.container}>
				<Header title="Akun" centerTitle
					leftComponent={
						<MaterialCommunityIcons name='account-tie' style={{color: '#689F38'}} size={20} />
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
