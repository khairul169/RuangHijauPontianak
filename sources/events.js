import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList } from 'react-native'
import { Header, EventCard } from './components'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default class Events extends Component {
	viewEvent = (id) => {
		this.props.navigation.navigate('ViewEvent', {
			index: id
		});
	}

	render() {
		return (
			<View style={styles.container}>
				<Header title="Kegiatan" centerTitle
					leftComponent={
						<MaterialIcons name='event-note' style={{color: '#689F38'}} size={20} />
					} />
				
				<FlatList data={[1, 2, 3]} keyExtractor={(item, index) => index.toString()}
					renderItem={({item, index}) => (
						<EventCard style={{marginTop: index === 0 ? 16 : 0}}
							onPress={() => this.viewEvent(index)} />
					)} />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
})
