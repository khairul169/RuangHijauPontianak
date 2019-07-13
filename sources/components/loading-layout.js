import React from 'react'
import { View } from 'react-native'
import { DotIndicator } from 'react-native-indicators'

const LoadingLayout = () => {
	return (
		<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
			<DotIndicator color='#7CB342' count={4} size={10} />
		</View>
	)
}

export default LoadingLayout
