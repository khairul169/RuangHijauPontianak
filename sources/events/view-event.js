import React, { Component } from 'react'
import { connect } from 'react-redux'
import API from '../actions/api'
import { Text, StyleSheet, View, ScrollView } from 'react-native'
import { Header, LoadingLayout, CoverImage } from '../components'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

class ViewEvent extends Component {
	state = {
		isLoading: false,
		event: null
	}

	componentDidMount() {
		this.eventId = this.props.navigation.getParam('index', null);
		this.fetchEvent(this.eventId);
	}

	fetchEvent = async (id) => {
		this.setState({isLoading: true});

		let result = await API.get(this.props.auth, 'events', 'view', {id});

		if (result && result.status === 0) {
			this.setState({
				isLoading: false,
				event: result.event
			});
		} else {
			this.setState({
				isLoading: false,
				event: null
			});
		}
	}

	renderPage = () => {
		const { event } = this.state;

		if (!event) {
			return null;
		}

		return (
			<ScrollView style={{flex: 1}}>
				

				<CoverImage style={{flex: 1, height: 200}}
					source={{uri: event.image}} />
				
				<View style={{padding: 16, borderBottomColor: '#ddd', borderBottomWidth: 1,
					flexDirection: 'row', alignItems: 'flex-start'}}>
					<MaterialIcons name='event' style={{color: '#FF7043', fontSize: 24, marginTop: 4}} />

					<View style={{flex: 1, marginLeft: 16}}>
						<Text style={{fontSize: 18, color: '#333'}}>
							{event.name}
						</Text>
						<Text style={{fontSize: 14, color: '#767676', marginTop: 4}}>
							{event.handlerName}{event.time ? ' • ' + event.time : null}
						</Text>
					</View>
				</View>

				{ event.desc ? (
					<View style={{padding: 16}}>
						<Text style={{fontSize: 14, color: '#424242', lineHeight: 20}}>
							{event.desc}
						</Text>
					</View>
				) : null }
			</ScrollView>
		)
	}

	render() {
		return (
			<View style={styles.container}>
				<Header title={ this.state.event ? this.state.event.name : "Lihat Kegiatan" }
					centerTitle backButton navigation={this.props.navigation} />

				{ this.state.isLoading ? <LoadingLayout /> : this.renderPage() }
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
	auth: state.auth
})

export default connect(mapStateToProps)(ViewEvent)
