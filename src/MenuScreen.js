import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import color from "./component/color";
import { Down, Name, Save } from "./component/Text";
import images from "./images/image";
import image from "../image";
import { AntDesign, Feather } from "./component/icon";

const MenuScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.View1}>
        <View style={{ flex: 1, marginBottom: 30 }}>
          <Text style={styles.Title1}>{Save}</Text>
          <View style={{ alignItems: "center" }}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={styles.List}
            >
              {image.map((item, index) => (
                <TouchableOpacity key={index}>
                  <Image source={item.image} style={styles.image} />
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
        <View style={{ flex: 1, marginBottom: 20 }}>
          <Text style={styles.Title1}>{Down}</Text>
          <View style={{ alignItems: "center" }}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={styles.List}
            >
              {image.map((item, index) => (
                <TouchableOpacity key={index}>
                  <Image source={item.image} style={styles.image} />
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      </View>
      <View style={styles.View2}>
        <View style={styles.Right}>
          <Feather
            name="arrow-right"
            style={styles.LeftIcon}
            size={20}
            color={color.white}
          />
        </View>
        <View style={styles.PRO}>
          <Image source={images.pro} style={styles.ProImage} />
          <Text style={styles.Name}> {Name}</Text>
          <Text style={styles.Ftime}>Дуусах хугацаа</Text>
          <Text style={styles.Ftime}>2020/12/16-2021/112/16</Text>
          <TouchableOpacity style={styles.TouchableOpacity}>
            <Text style={styles.TouchText}>Эрхээ сунгах</Text>
          </TouchableOpacity>
        </View>
        <View></View>
      </View>
    </View>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
  },
  View1: {
    height: "100%",
    width: "45%",
    backgroundColor: color.white,
    paddingVertical: 50,
    paddingHorizontal: 25,
  },
  View2: {
    flex: 1,
    height: "100%",
    width: "65%",
    backgroundColor: color.primary,
  },
  Title1: {
    fontWeight: "800",
    fontSize: 12,
    textAlign: "left",
  },
  List: {
    marginTop: 15,
  },
  image: {
    width: 100,
    height: 70,
    marginVertical: 13,
  },
  Right: {
    marginTop: 50,
    marginRight: 10,
    alignItems: "flex-end",
  },
  PRO: {
    alignItems: "center",
  },
  ProImage: {
    height: 140,
    width: 140,
    marginTop: 20,
  },
  Name: {
    fontSize: 12,
    fontWeight: "800",
    color: color.white,
    paddingVertical: 10,
  },
  Ftime: {
    color: color.white,
    fontSize: 11,
  },
  TouchableOpacity: {
    backgroundColor: color.succes,
    borderRadius: 5,
    marginTop: 12,
  },
  TouchText: {
    color: color.white,
    fontSize: 8,
    paddingVertical: 5,
    paddingHorizontal: 30,
  },
});
