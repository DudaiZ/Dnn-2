import React, { useState } from "react";
import AppIntroSlider from "react-native-app-intro-slider";
import AsyncStorage from "@react-native-async-storage/async-storage";
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
import symbolicateStackTrace from "react-native/Libraries/Core/Devtools/symbolicateStackTrace";

const slides = [
  {
    key: "1",
    title: <Text>{title1}</Text>,
    text: <Text>{desc1}</Text>,
    image: images.logo2,
  },
  {
    key: "2",
    title: <Text>{title2}</Text>,

    text: <Text>{desc2}</Text>,
    image: images.logo3,
  },
  {
    key: "3",
    title: <Text>{title3}</Text>,
    text: <Text>{desc3}</Text>,
    image: images.logo3,
  },
];
const StartScreen = ({ navigation }) => {
  const [finish, setFinish] = useState(false);
  const [counter, setCounter] = useState(0);
  console.log(finish);
  console.log(counter);
  const renderItem = ({ item }) => {
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          style={styles.xButton}
          onPress={() => {
            navigation.replace("Login");
            AsyncStorage.setItem("first", "1");
          }}
        >
          {counter !== 2 ? (
            <Text style={styles.nextButton}>Алгасах</Text>
          ) : (
            <Text style={styles.nextButton}>Дуусгах</Text>
          )}
        </TouchableOpacity>
        <View style={styles.View}>
          <Image source={item.image} style={styles.image} />
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.Text}>{item.text}</Text>
        </View>
      </SafeAreaView>
    );
  };
  const oneDone = () => {
    return setState({ showRealUp: true });
  };
  return (
    <AppIntroSlider
      activeDotStyle={{
        width: "32%",
        backgroundColor: color.primary,
        height: 5,
      }}
      dotStyle={{ width: "32%", backgroundColor: color.budegGray, height: 5 }}
      data={slides}
      renderItem={renderItem}
      onSlideChange={(index, lastIndex) => {
        setCounter((index) => index + 1);
        setFinish(index === 2);
      }}
    ></AppIntroSlider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  View: {
    marginTop: 100,
    alignItems: "center",
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
  nextButton: {
    textAlign: "right",
    marginTop: 25,
    marginRight: 25,
    color: color.SpaceGray,
    fontSize: 14,
  },
});

export default StartScreen;
