import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchEvents, setScrollToTop } from './actions/events'
import { StyleSheet, View, FlatList } from 'react-native'
import { Header, EventCard } from './components'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

class Events extends Component {
	componentDidMount() {
		this.onRefresh();
	}

	componentDidUpdate() {
		if (this.props.scrollToTop) {
			this.scrollToTop();
			this.props.setScrollToTop(false);
		}
	}

	scrollToTop = () => {
		if (this.flatList) {
			this.flatList.scrollToOffset({offset: 0});
		}
	}

	renderEvent = ({item, index}) => (
		<EventCard style={{marginTop: index === 0 ? 16 : 0}}
			image={{uri: item.image}}
			title={item.name}
			time={item.time}
			onPress={() => this.viewEvent(item.id)} />
	)

	viewEvent = (id) => {
		this.props.navigation.navigate('ViewEvent', {
			index: id
		});
	}

	onRefresh = () => {
		this.props.fetchEvents();
	}

	onEndReached = () => {
	}

	render() {
		const { isLoading, events } = this.props;

		return (
			<View style={styles.container}>
				<Header title="Kegiatan" centerTitle
					leftComponent={
						<MaterialIcons name='event-note' style={{color: '#689F38'}} size={20} />
					} />
				
				{ events ? (
					<FlatList ref={ref => this.flatList = ref} data={events}
						keyExtractor={(item, index) => index.toString()}
						renderItem={this.renderEvent}
						refreshing={isLoading}
						onRefresh={this.onRefresh}
						onEndReached={this.onEndReached} />
				) : null }
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
})

const mapStateToProps = (state) => ({
	isLoading: state.events.isLoading,
	events: state.events.events,
	scrollToTop: state.events.scrollToTop
})

const mapDispatchToProps = {
	fetchEvents,
	setScrollToTop
}

export default connect(mapStateToProps, mapDispatchToProps)(Events)
