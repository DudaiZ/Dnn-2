import { NavigationHelpersContext } from "@react-navigation/core";
import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import color from "./component/color";
import {
  AntDesign,
  Entypo,
  Feather,
  Fontisto,
  Ionicons,
} from "./component/icon";
import Mybutton from "./component/Mybutton";
import MyInput from "./component/MyInput";
import { Newtreh, Warning } from "./component/Text";
import images from "./images/image";
import {Image} from 'react-native';

const LoginScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.Container}>
      <TouchableOpacity
        style={styles.View1}
        onPress={() => navigation.navigate("Start")}
      >
        <Entypo name="chevron-small-left" size={16} color={color.SpaceGray} />
        <Text style={styles.Text}> {Newtreh} </Text>
      </TouchableOpacity>

      <View style={styles.Warning}>
        <View style={styles.View2}>
          <Ionicons
            name="information-circle-outline"
            size={23}
            style={styles.Warn}
          />
          <Text style={{ color: color.SpaceGray }}>{Warning}</Text>
        </View>
        <View style={styles.View3}>
          <AntDesign
            name="user"
            size={20}
            color={color.SpaceGray}
            style={styles.user}
          />
          <MyInput placeholder="Хэрэглэгчийн нэр" />
        </View>
        <View style={styles.View3}>
          <Feather name="eye-off" size={20} style={styles.icon} />
          <MyInput secureTextEntry={true} placeholder="Нууц үг" />
        </View>
        <View style={styles.Check}>
          <View style={styles.Secure}>
            <Fontisto
              name="checkbox-passive"
              size={10}
              style={styles.checkIcon}
            />
            <Text style={styles.Seem}>Намайг сана</Text>
          </View>
          <Text style={styles.Seem}>Нууц үг сэргээх</Text>
        </View>
      </View>
      <View style={styles.Final}>
        <TouchableOpacity style={styles.TouchableOpacity}>
          <Text style={styles.TouchText}>Нэвтрэх</Text>
        </TouchableOpacity>
        <Image source={images.finger} style={styles.finger} />
      </View>
      <View>
        <TouchableOpacity
          style={styles.FinalTouch}
          onPress={() => navigation.navigate("Sign Up")}
        >
          <Text>Бүртгүүлэх</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    marginHorizontal: 25,
  },
  View1: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 50,
  },
  Warning: {
    marginTop: 200,
    // backgroundColor: "red",
  },

  View2: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: color.warn,
    marginVertical: 25,
    paddingVertical: 10,
    borderRadius: 5,
  },
  Warn: {
    paddingStart: 10,
    paddingRight: 5,
    color: color.SpaceGray,
  },
  icon: {
    color: color.SpaceGray,
    paddingRight: 15,
  },
  Text: {
    color: color.gray,
    fontWeight: "bold",
    fontSize: 16,
  },
  View3: {
    borderColor: color.blue,
    borderWidth: 1,
    paddingVertical: 15,
    marginVertical: 5,
    borderRadius: 5,
    paddingStart: 17,
    flexDirection: "row",
  },
  user: {
    paddingRight: 15,
  },
  Check: {
    flexDirection: "row",
    marginVertical: 18,
    justifyContent: "space-between",
  },
  Secure: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkIcon: {
    marginRight: 5,
    color: color.black,
  },
  Seem: {
    fontSize: 12,
  },
  TouchableOpacity: {
    height: 50,
    backgroundColor: color.primary,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    width: "80%",
  },
  TouchText: {
    color: color.white,
    fontSize: 15,
    fontWeight: "bold",
  },
  Final: {
    width: "100%",
    flexDirection: 'row',
    alignItems: 'center'
  },
  finger: 
    { width: 35,
       height: 35,
       marginHorizontal: 20,
       
       },
  FinalTouch: {
    height: 50,
    borderRadius: 5,
    borderColor: color.blue,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },
});

export default LoginScreen;
