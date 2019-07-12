import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Image, TouchableHighlight } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const ActionButton = (props) => {
	return (
		<TouchableOpacity onPress={this.onPress} style={styles.actionButton}>
			<Icon name='heart' size={18} style={{color: '#828282', marginRight: 6}} />
			<Text style={{fontSize: 14, color: '#646464'}}>152</Text>
		</TouchableOpacity>
	)
}

export const PosterLayout = (props) => {
	const photoSize = props.photoSize ? props.photoSize : 32;

	return (
		<View style={styles.posterContainer}>
			<View style={[styles.posterPhoto, {width: photoSize, height: photoSize, borderRadius: photoSize/2}]} />

			<View style={{flex: 1, marginLeft: 16}}>
				<Text style={styles.posterName}>Khairul Hidayat</Text>
				<Text style={styles.posterId}>khairul169</Text>
			</View>
		</View>
	)
}

export default class PhotoListItem extends Component {
	render() {
		return (
			<View style={styles.container}>
				<TouchableHighlight underlayColor={null} style={styles.postImageButton} onPress={this.props.onImagePress}>
					<Image source={require('../../assets/tanam_pohon.jpg')}
						style={styles.postImage} />
				</TouchableHighlight>

				<View style={styles.bottomContainer}>
					<PosterLayout />

					<View style={styles.actionContainer}>
						<ActionButton />
					</View>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff', marginBottom: 16, elevation: 2
	},
	bottomContainer: {
		flexDirection: 'row', alignItems: 'center', paddingLeft: 10, paddingVertical: 10
	},
	posterContainer: {
		flexDirection: 'row', alignItems: 'center', flex: 1
	},
	posterPhoto: {
		backgroundColor: '#626262', overflow: 'hidden'
	},
	posterName: {
		fontSize: 14, color: '#689F38'
	},
	posterId: {
		fontSize: 12, color: '#546E7A', marginTop: 2
	},
	postImageButton: {
		height: 200, flex: 1, overflow: 'hidden'
	},
	postImage: {
		width: '100%', height: '100%', resizeMode: 'cover'
	},
	actionContainer: {
		flexDirection: 'row', alignItems: 'stretch',
		borderLeftColor: '#B0BEC5', borderLeftWidth: 1, height: '100%'
	},
	actionButton: {
		flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
		paddingLeft: 16, paddingRight: 24,
	}
})
