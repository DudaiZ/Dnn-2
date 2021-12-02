import React, { useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Loader } from "./src/component/Loader";
import RouteScreen from "./src/RouteScreen";
import AppIntroSlider from "react-native-app-intro-slider";
import {
  desc1,
  desc2,
  desc3,
  title2,
  title1,
  title3,
} from "./src/component/Text";
import images from "./src/images/image";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import color from "./src/component/color";
import { Entypo, Ionicons } from "./src/component/icon";


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

