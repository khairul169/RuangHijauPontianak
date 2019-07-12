import React, { Component } from 'react'
import { Text, StyleSheet, View, Dimensions, YellowBox, ScrollView } from 'react-native'
import Image from 'react-native-scalable-image'
import { Header, PosterLayout } from '../components'

YellowBox.ignoreWarnings(['componentWillReceiveProps']);

export default class ViewPhoto extends Component {
	constructor(props) {
		super(props);

		this.photoIndex = props.navigation.getParam('index', null);
	}

	render() {
		return (
			<View style={styles.container}>
				<Header title="Lihat Foto" centerTitle backButton navigation={this.props.navigation} />
				
				<ScrollView style={{flex: 1}}>
					<View style={{padding: 16}}>
						<PosterLayout />
					</View>

					<Image source={require('../../assets/tanam_pohon.jpg')}
						width={Dimensions.get('window').width} />
					
					<View style={{padding: 16}}>
						<Text>sdadasdas</Text>
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
