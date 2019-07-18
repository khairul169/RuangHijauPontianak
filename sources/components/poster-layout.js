import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableImage } from './images'
import PropTypes from 'prop-types'

const PosterLayout = ({photoSize, onPress, photoSource, title, subtitle}) => {
	const imgStyle = { width: photoSize, height: photoSize, borderRadius: photoSize/2 };

	return (
		<View style={styles.container}>
			<TouchableImage onPress={onPress}
				style={[styles.img, imgStyle]}
				source={photoSource} />

			<View style={{flex: 1, marginLeft: 16}}>
				<Text onPress={onPress} style={styles.title}>{title}</Text>
				{subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null }
			</View>
		</View>
	)
}

PosterLayout.propTypes = {
	photoSize: PropTypes.number,
	onPress: PropTypes.func,
	photoSource: PropTypes.object,
	title: PropTypes.string,
	subtitle: PropTypes.string
}

PosterLayout.defaultProps = {
	photoSize: 32
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