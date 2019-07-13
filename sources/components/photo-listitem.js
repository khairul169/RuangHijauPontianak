import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import PosterLayout from './poster-layout'
import { TouchableImage } from './images'

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

const PhotoListItem = (props) => {
	return (
		<View style={[styles.container, props.style]}>
			<TouchableImage style={styles.postImage}
				source={props.image}
				onPress={props.onImagePress} />
			
			<View style={styles.bottomContainer}>
				<PosterLayout title={props.name} subtitle={props.username}/>
				<ActionButton icon='heart' iconColor={props.liked ? '#ef5350' : null} label={props.likes} />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff', margin: 16, elevation: 2
	},
	bottomContainer: {
		flexDirection: 'row', alignItems: 'center', padding: 10
	},
	postImage: {
		flex: 1, height: 200
	},
	actionButton: {
		flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
		paddingHorizontal: 16
	}
})

export default PhotoListItem
