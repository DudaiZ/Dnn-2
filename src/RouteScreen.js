import React from "react";
import LoginScreen from "./LoginScreen";
import StartScreen from "./StartScreen";
import SplashScreen from "./SplashScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignScreen from "./SignScreen";
import Introduction from "./Introduction";
import MenuScreen from "./MenuScreen";

const Stack = createNativeStackNavigator();

const RouteScreen = ({ navigation }) => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen name="Splash" component={SplashScreen} />  */}

      <Stack.Screen
        name="Menu"
        component={MenuScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Start"
        component={StartScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Sign Up"
        component={SignScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
export default RouteScreen;
