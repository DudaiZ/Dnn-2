import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import color from './component/color';
import {Chew, EyeOff, User} from './component/icon';
import Mybutton from './component/Mybutton';
import MyInput from './component/MyInput';
import {Newtreh} from './component/Text';

const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.View1}>
        <Chew name="chevron-small-left" size={28} style={styles.icon} />
        <Text style={styles.Text}> {Newtreh} </Text>
      </View>
      <View style={styles.View2}>
        <View style={styles.View3}>
          <User name="user" size={26} style={styles.user} />
          <MyInput placeholder="Хэрэглэгчийн нэр" />
        </View>
        <View style={styles.View4}>
          <EyeOff name="eye-off" size={28} style={styles.icon} />
          <MyInput placeholder="Нууц үг" />
        </View>

        <Mybutton />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    marginHorizontal: 15,
  },
  View1: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  View2: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    color: color.gray,
  },
  Text: {
    color: color.gray,
    fontWeight: 'bold',
    fontSize: 16,
  },
  View3: {
    width: '90%',
    borderColor: color.blue,
    borderWidth: 1,
    paddingVertical: 15,
    marginHorizontal: 25,
    marginVertical: 5,
    borderRadius: 5,
    paddingStart: 20,
  },
});

export default LoginScreen;
