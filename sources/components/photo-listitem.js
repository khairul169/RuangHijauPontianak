import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Image, TouchableHighlight } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const ActionButton = (props) => {
	return (
		<TouchableOpacity onPress={this.onPress} style={styles.actionButton}>
			<Icon name={props.icon} size={18} style={{color: props.iconColor ? props.iconColor : '#525252'}} />
			{ props.label && (
				<Text style={{fontSize: 14, color: '#525252', marginLeft: 6}}>{props.label}</Text>
			) }
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
			<View style={[styles.container, this.props.style]}>
				<TouchableHighlight underlayColor={null} style={styles.postImageButton} onPress={this.props.onImagePress}>
					<Image source={require('../../assets/tanam_pohon.jpg')}
						style={styles.postImage} />
				</TouchableHighlight>

				<View style={styles.bottomContainer}>
					<PosterLayout />

					<View style={styles.actionContainer}>
						<ActionButton icon='heart' iconColor='#ef5350' label={289} />
					</View>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff', margin: 16, elevation: 2
	},
	bottomContainer: {
		flexDirection: 'row', alignItems: 'center', padding: 10
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
		flexDirection: 'row', alignItems: 'stretch', height: '100%'
	},
	actionButton: {
		flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
		paddingHorizontal: 24, borderColor: '#AED581', borderWidth: 1, borderRadius: 3
	}
})
