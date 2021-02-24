import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

const storage = {
  storeData: async ([key, data]) => {
    const jsonData = JSON.stringify(data);
    try {
      await AsyncStorage.setItem(key, jsonData);
    } catch (e) {
      Alert('Error storing data: ', e);
    }
  },
};

export default storage;
