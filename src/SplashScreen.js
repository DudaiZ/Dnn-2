import {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View } from 'react-native';
import images from './images/image';

const SplashScreen = () => {
  const [first, setFirst] = useState(null);
  return AsyncStorage.getItem(first)
    .then(value => {
      setFirst(value);
    })
    .catch();
    <View>
      <Image source={images.logo} style={{with: 50, height: 50}}/>
    </View>
};

export default SplashScreen;
