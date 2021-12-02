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

const SignScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.Container}>
      <TouchableOpacity
        style={styles.View1}
        onPress={() => navigation.navigate("Login")}
      >
        <Entypo name="chevron-small-left" size={16} color={color.SpaceGray} />
        <Text style={styles.Text}> Бүртгүүлэх </Text>
      </TouchableOpacity>

      <View style={styles.Warning}>
        <View style={styles.View2}>
          <Ionicons
            name="information-circle-outline"
            size={23}
            color={color.SpaceGray}
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
          <Ionicons name="mail-unread-outline" size={20} style={styles.icon} />
          <MyInput secureTextEntry={true} placeholder="И-мэйл хаяг" />
        </View>
      </View>
      <View>
        <TouchableOpacity
          style={styles.FinalTouch}
          onPress={() => navigation.navigate("Sign Up")}
        >
          <Text style={styles.TouchText}>Бүртгүүлэх</Text>
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
    marginVertical: 8,
    borderRadius: 5,
    paddingStart: 17,
    flexDirection: "row",
  },
  user: {
    paddingRight: 15,
  },
  TouchableOpacity: {
    height: 50,

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
  FinalTouch: {
    height: 50,
    borderRadius: 5,
    backgroundColor: color.primary,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 45,
  },
});

export default SignScreen;
