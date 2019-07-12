import React, { Component } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import { Header, EventCard } from './components'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default class Events extends Component {
	state = {
		events: [1, 2, 3, 4],
		refreshing: false
	}

	renderEvent = ({item, index}) => (
		<EventCard style={{marginTop: index === 0 ? 16 : 0}}
			onPress={() => this.viewEvent(index)} />
	)

	viewEvent = (id) => {
		this.props.navigation.navigate('ViewEvent', {
			index: id
		});
	}

	onRefresh = () => {
		this.setState({
			refreshing: false
		});
	}

	onEndReached = () => {
	}

	render() {
		return (
			<View style={styles.container}>
				<Header title="Kegiatan" centerTitle
					leftComponent={
						<MaterialIcons name='event-note' style={{color: '#689F38'}} size={20} />
					} />
				
				<FlatList data={this.state.events} keyExtractor={(item, index) => index.toString()}
					renderItem={this.renderEvent}
					refreshing={this.state.refreshing}
					onRefresh={this.onRefresh}
					onEndReached={this.onEndReached} />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
})
