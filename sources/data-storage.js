import AsyncStorage from '@react-native-community/async-storage'

export default class DataStorage {
	static sessionId = '_DataSessionId';

	static storeData = async (key, value) => {
		try {
			await AsyncStorage.setItem(key, value);
		} catch (error) {
			console.log(error.message);
		}
	}

	static getData = async (key, defaultValue = null) => {
		try {
			const value = await AsyncStorage.getItem(key);
			if (value !== null) {
				return value;
			} else {
				return defaultValue;
			}
		} catch (error) {
			console.log(error.message);
			return defaultValue;
		}
	}

	static removeData = async (key) => {
		try {
			await AsyncStorage.removeItem(key);
		} catch (error) {
			console.log(error.message);
		}
	}
}
