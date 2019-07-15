import React from 'react'
import { Text, StyleSheet, View, TouchableHighlight } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { CoverImage } from './images'

const EventCard = (props) => {
	return (
		<TouchableHighlight onPress={props.onPress} underlayColor={null}>
			<View style={[styles.container, props.style]}>
				<View style={styles.eventDetail}>
					<MaterialIcons name='event' style={styles.eventIcon} />

					<View style={{flex: 1, marginHorizontal: 12}}>
						<Text style={{fontSize: 14, color: '#333'}}>{props.title}</Text>
					</View>

					{ props.time ? (
						<View style={styles.eventTimeContainer}>
							<Text style={{fontSize: 14, color: '#fff'}}>{props.time}</Text>
						</View>
					) : null }
				</View>
				
				<View style={styles.imageContainer}>
					{props.image ? <CoverImage source={props.image} /> : null}
				</View>
			</View>
		</TouchableHighlight>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1, margin: 16,
		backgroundColor: '#fff', elevation: 2
	},
	eventDetail: {
		flex: 1, flexDirection: 'row', alignItems: 'center'
	},
	eventIcon: {
		color: '#FF7043', fontSize: 24, marginLeft: 8, marginVertical: 8
	},
	eventTimeContainer: {
		paddingHorizontal: 16, alignSelf: 'stretch', justifyContent: 'center', backgroundColor: '#78909C'
	},
	imageContainer: {
		flex: 1, height: 180, backgroundColor: '#eee'
	}
})

export default EventCard
