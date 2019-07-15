import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableImage } from './images'

const PosterLayout = (props) => {
	const photoSize = props.photoSize ? props.photoSize : 32;
	const imgStyle = { width: photoSize, height: photoSize, borderRadius: photoSize/2 };

	return (
		<View style={styles.container}>
			<TouchableImage onPress={props.onPress}
				style={[styles.img, imgStyle]}
				source={props.photoSource} />

			<View style={{flex: 1, marginLeft: 16}}>
				<Text onPress={props.onPress} style={styles.title}>{props.title}</Text>
				{props.subtitle ? <Text style={styles.subtitle}>{props.subtitle}</Text> : null }
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row', alignItems: 'center', flex: 1
	},
	img: {
		backgroundColor: '#ddd'
	},
	title: {
		fontSize: 14, color: '#689F38'
	},
	subtitle: {
		fontSize: 12, color: '#546E7A', marginTop: 2
	}
})

export default PosterLayout