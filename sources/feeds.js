import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList } from 'react-native'
import { Header, PhotoListItem, HeaderButton } from './components'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default class Feeds extends Component {
	state = {
		refreshing: false,
		data: [1, 2, 3, 4]
	}
	
	render() {
		return (
			<View style={styles.container}>
				<Header title="Hijau Kota Kita" centerTitle
					leftComponent={
						<HeaderButton onPress={() => this._feedList.scrollToOffset({offset: 0})} component={
								<FontAwesome name='comments' style={{color: '#689F38'}} size={20} />
							} />
					}
					rightComponent={
						<HeaderButton onPress={() => this.props.navigation.navigate('UploadPhoto')} component={
							<MaterialIcons name='add-circle' style={{color: '#686868'}} size={20} />
						} />
					} />

				<View style={styles.content}>
					<FlatList ref={ref => this._feedList = ref} style={{flex: 1}} data={this.state.data}
						keyExtractor={(item, index) => index.toString()}
						renderItem={({item}) => (
							<PhotoListItem onImagePress={() => this.props.navigation.navigate('Test')} />
						)}
						refreshing={this.state.refreshing}
						onRefresh={() => {
							this.setState({
								refreshing: false,
								data: [1, 2, 3]
							});
						}}
						onEndReached={() => {
							let newData = [...this.state.data];
							newData.push(1);
							newData.push(1);
							this.setState({data: newData});
						}} />
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	content: {
		flex: 1, backgroundColor: '#f2f2f2', zIndex: -1
	}
})
