import React from 'react'
import { Image as ReactImage, TouchableHighlight, YellowBox } from 'react-native'
import ScalableImage from 'react-native-scalable-image'

YellowBox.ignoreWarnings(['componentWillReceiveProps'])

const Image = (props) => {
	return <ScalableImage {...props} />
}

const CoverImage = (props) => {
	return (
		<ReactImage source={props.source}
			style={[{width: '100%', height: '100%', resizeMode: 'cover'}, props.style]} />
	)
}

const TouchableImage = (props) => {
	return (
		<TouchableHighlight onPress={props.onPress} underlayColor={null} style={props.style}>
			{ props.width || props.height ? (
				<ScalableImage source={props.source} width={props.width} height={props.width} />
			) : (
				<CoverImage source={props.source} />
			) }
		</TouchableHighlight>
	)
}

export { Image, CoverImage, TouchableImage }
