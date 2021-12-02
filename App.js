import React, {useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Loader} from './src/component/Loader';
import RouteScreen from './src/RouteScreen';

const RootStack = createNativeStackNavigator();

const App = () => {
  const [isLogged, setIsLogged] = useState(false);

  if (isLogged === null) return <Loader />;
  return (
    <NavigationContainer>
      <RouteScreen />
    </NavigationContainer>
  );
};

export default App;
