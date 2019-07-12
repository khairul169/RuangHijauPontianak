import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, TouchableOpacity, TextInput, Dimensions } from 'react-native'
import ImagePicker from 'react-native-image-picker'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { Header, Image } from '../components'

export default class UploadPhoto extends Component {
	state = {
		photoSelected: null
	}

	selectPhoto = () => {
		if (this.state.photoSelected) {
			return;
		}

		const options = {
			title: 'Masukkan Foto',
			takePhotoButtonTitle: 'Ambil Foto',
			chooseFromLibraryButtonTitle: 'Pilih dari Pustaka',
			mediaType: 'photo',
			storageOptions: {
				cameraRoll: true
			}
		};

		ImagePicker.showImagePicker(options, (response) => {
			if (response.didCancel || response.error) {
				return;
			}

			const { uri, data, width, height } = response;

			this.setState({
				photoSelected: { uri, data, width, height }
			});
		});
	}

	removePhoto = () => {
		this.setState({
			photoSelected: null
		});
	}

	render() {
		return (
			<View style={styles.container}>
				<Header title="Unggah Foto" centerTitle backButton navigation={this.props.navigation} />

				<ScrollView style={{flex: 1}}>
					<View style={{flex: 1, zIndex: -1}}>
						{ !this.state.photoSelected ? (
							<View style={{alignItems: 'center', paddingHorizontal: 16, paddingVertical: 32}}>
								<TouchableOpacity
									style={{flex: 0, borderColor: '#ddd', borderWidth: 1, borderRadius: 5, padding: 24}}
									onPress={this.selectPhoto}>
									<MaterialIcons name='add-a-photo' size={32} style={{color: '#333'}} />
								</TouchableOpacity>
							</View>
						) : (
							<View style={{alignItems: 'center'}}>
								<Image source={{uri: this.state.photoSelected.uri}}
									width={Dimensions.get('window').width} />
								
								<TouchableOpacity style={{width: 32, height: 32, borderRadius: 32/2,
									backgroundColor: '#333d', alignItems: 'center', justifyContent: 'center',
									position: 'absolute', top: 8, right: 8}}
									onPress={this.removePhoto}>
									<FontAwesome name='remove' size={14} style={{color: '#fff'}} />
								</TouchableOpacity>
							</View>
						) }
					</View>

					<View style={{elevation: 3, backgroundColor: '#fff'}}>
						<TextInput style={{padding: 16}} placeholder='Berikan deskripsi...'
							multiline={true} />
					</View>
				</ScrollView>

				<View style={{padding: 16, backgroundColor: '#8BC34A'}}>
					<Text style={{textAlign: 'center', color: '#fff'}}>UNGGAH</Text>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
})
