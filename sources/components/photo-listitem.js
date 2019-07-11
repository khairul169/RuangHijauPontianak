import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Image, TouchableHighlight } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const ActionButton = (props) => {
	return (
		<TouchableOpacity onPress={this.onPress} style={styles.actionButton}>
			<Icon name='heart' size={18} style={{color: '#585858', marginRight: 6}} />
			<Text style={{fontSize: 14, color: '#646464'}}>152</Text>
		</TouchableOpacity>
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

				<View style={styles.posterContainer}>
					<View style={styles.posterPhoto} />

					<View style={{flex: 1, marginLeft: 16}}>
						<Text style={styles.posterName}>Khairul Hidayat</Text>
						<Text style={styles.posterId}>khairul169</Text>
					</View>

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
		backgroundColor: '#fff', marginBottom: 16, borderBottomColor: '#e6e6e6', borderBottomWidth: 1
	},
	posterContainer: {
		flexDirection: 'row', alignItems: 'center', paddingLeft: 10, paddingVertical: 10
	},
	posterPhoto: {
		width: 36, height: 36, borderRadius: 36/2, backgroundColor: '#333'
	},
	posterName: {
		fontSize: 14, color: '#222'
	},
	posterId: {
		fontSize: 12, color: '#646464', marginTop: 2
	},
	postImageButton: {
		height: 200, flex: 1, overflow: 'hidden'
	},
	postImage: {
		width: '100%', height: '100%', resizeMode: 'cover'
	},
	actionContainer: {
		borderLeftColor: '#efefef', borderLeftWidth: 1, height: '100%',
		flexDirection: 'row', alignItems: 'stretch'
	},
	actionButton: {
		flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
		paddingLeft: 16, paddingRight: 24,
	}
})
