import React from "react";
import AppIntroSlider from "react-native-app-intro-slider";
import {
  desc1,
  desc2,
  desc3,
  title2,
  title1,
  title3,
} from "../src/component/Text";
import images from "../src/images/image";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import color from "../src/component/color";
import { Entypo, Ionicons } from "../src/component/icon";

const slides = [
  {
    key: "1",
    title: <Text>{title1}</Text>,
    text: <Text>{desc1}</Text>,
    image: images.logo,
  },
  {
    key: "2",
    title: <Text>{title2}</Text>,

    text: <Text>{desc2}</Text>,
    image: images.logo2,
  },
  {
    key: "3",
    title: <Text>{title3}</Text>,
    text: <Text>{desc3}</Text>,
    image: images.logo3,
  },
];

const renderItem = ({ item }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.Text}>{item.text}</Text>
    </SafeAreaView>
  );
};
const renderNextButton = () => {
  return (
    <View>
      <Entypo name="controller-next" color={color.SpaceGray} size={24} />
    </View>
  );
};
const renderDoneButton = () => {
  return (
    <View>
      <Ionicons name="md-cloud-done-outline" color={color.blue} size={24} />
    </View>
  );
};
const StartScreen = () => {

  return (
    <AppIntroSlider
      data={slides}
      renderItem={renderItem}
      renderDoneButton={renderDoneButton}
      renderNextButton={renderNextButton}
    ></AppIntroSlider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 160,
  },
  image: {
    height: 200,
    width: 300,
    marginVertical: 50,
    // backgroundColor: 'black'
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: color.primary,
  },
  Text: {
    textAlign: "center",
    fontSize: 15,
    marginVertical: 20,
    color: color.SpaceGray,
  },
});

export default StartScreen;
