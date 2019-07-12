import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableHighlight } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default class EventCard extends Component {
	render() {
		return (
			<TouchableHighlight onPress={this.props.onPress} underlayColor={null}>
				<View style={[styles.container, this.props.style]}>
					<View style={styles.eventDetail}>
						<MaterialIcons name='event' style={styles.eventIcon} />

						<View style={{marginLeft: 12}}>
							<Text style={{fontSize: 14, color: '#333'}}>Nama Event</Text>
							<Text style={{fontSize: 12, color: '#626262'}}>Singkawang • 27 Januari 2019</Text>
						</View>
					</View>
					<View style={styles.imageContainer}>
						<View style={{backgroundColor: '#eee', flex: 1, height: '100%'}} />
					</View>
				</View>
			</TouchableHighlight>
		)
	}
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
		flex: 1, height: 180
	}
})
