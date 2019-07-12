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

					<View style={{marginLeft: 12}}>
						<Text style={{fontSize: 14, color: '#333'}}>Nama Event</Text>
						<Text style={{fontSize: 12, color: '#626262'}}>Singkawang • 27 Januari 2019</Text>
					</View>
				</View>
				
				<View style={styles.imageContainer}>
					<CoverImage source={require('../../assets/tanam_pohon.jpg')} />
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
		flex: 1, flexDirection: 'row', alignItems: 'center', padding: 8
	},
	eventIcon: {
		color: '#FF7043', fontSize: 24, marginLeft: 4
	},
	imageContainer: {
		flex: 1, height: 180, backgroundColor: '#eee'
	}
})

export default EventCard
