import React from 'react'
import { View, Text } from 'react-native'
import PosterLayout from './poster-layout'
import PropTypes from 'prop-types'

const Comment = ({style, name, date, value}) => {
	return (
		<View style={style}>
			<PosterLayout title={name} subtitle={date} />
			<Text style={{marginLeft: 48, marginTop: 4, fontSize: 14, color: '#333', lineHeight: 18}}>
				{value}
			</Text>
		</View>
	)
}

Comment.propTypes = {
	style: PropTypes.object,
	name: PropTypes.string,
	date: PropTypes.string,
	value: PropTypes.string
}

Comment.defaultProps = {
	name: 'Test',
	date: '16 Jul 2019 12.09',
	value: 'Test jajajawadawdjkawdkjjawbdawbkdabwbdkkadjbjakbdbkjawbdkjawbdjakwbdjka'
}

export default Comment
