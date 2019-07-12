import React, { Component } from 'react'
import { Text, StyleSheet, View, Dimensions, ScrollView, TouchableHighlight, TextInput } from 'react-native'
import Image from 'react-native-scalable-image'
import { Header, PosterLayout, HeaderButton } from '../components'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const ActionButton = (props) => {
	return (
		<TouchableHighlight style={[{flex: props.noFlex ? null : 1, justifyContent: 'center'}, props.style]}
			onPress={props.onPress} underlayColor={null}>
			<View style={[{alignItems: 'center', justifyContent: 'center', flexDirection: 'row'},
				props.leftBorder ? {borderLeftColor: '#eee', borderLeftWidth: 1} : null]}>
				<MaterialCommunityIcons name={props.icon} style={{color: '#686868'}} size={18} />

				{ props.label && (
					<Text style={{fontSize: 14, color: '#424242', marginLeft: 10}}>{props.label}</Text>
				) }
			</View>
		</TouchableHighlight>
	)
}

export default class ViewPhoto extends Component {
	constructor(props) {
		super(props);

		this.photoIndex = props.navigation.getParam('index', null);
	}

	render() {
		return (
			<View style={styles.container}>
				<Header backButton navigation={this.props.navigation}
					title="Lihat Foto" centerTitle
					rightComponent={
						<HeaderButton component={
							<MaterialCommunityIcons name='dots-vertical' style={{color: '#686868'}} size={18} />
						} />
					} />
				
				<ScrollView style={{flex: 1}}>
					<Image source={require('../../assets/tanam_pohon.jpg')}
						width={Dimensions.get('window').width} />
					
					<View style={{padding: 16}}>
						<PosterLayout title='Khairul Hidayat' subtitle='Siantan Hulu • 27 Januari 2019 14.32'/>
						<Text style={styles.postDescription}>Hello world! this is some photo description text to describe photo in some words.</Text>
					</View>

					{/*<View style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginBottom: 12}}>
						<TextInput placeholder="Berikan komentar.." style={{flex: 1, marginLeft: 16,
							borderColor: '#eee', borderWidth: 1, borderRadius: 10,
							paddingVertical: 4, paddingHorizontal: 16}} />
						<ActionButton icon='comment-plus' noFlex style={{width: 60}} />
					</View>*/}

					<View style={{flex: 1, flexDirection: 'row', alignItems: 'stretch', height: 50,
						borderTopColor: '#eee', borderTopWidth: 1,
						borderBottomColor: '#eee', borderBottomWidth: 1}}>
						<ActionButton icon='heart' label={142} onPress={() => alert('test')} />
						{/*<ActionButton icon='share' leftBorder onPress={() => alert('test')}  />*/}
					</View>
				</ScrollView>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	postDescription: {
		fontSize: 14, color: '#424242', marginTop: 16, lineHeight: 20
	}
})
