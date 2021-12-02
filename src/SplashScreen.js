import {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = () => {
  const [first, setFirst] = useState(null);
  return AsyncStorage.getItem(first)
    .then(value => {
      setFirst(value);
    })
    .catch();
};

export default SplashScreen;
