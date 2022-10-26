import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import database from '@react-native-firebase/database';
import {TextInput} from 'react-native-paper';
import Toast from 'react-native-simple-toast';

const Login = ({navigation}: {navigation: any}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async () => {
    if (email == '' || password == '') {
      Alert.alert('Fill all the field');
    }
    database()
      .ref('/users/')
      .orderByChild('email')
      .equalTo(email)
      .once('value')
      .then(snapshot => {
        if (snapshot.val() == null) {
          Toast.show('Invalid Email');
          return false;
        }
        let userData: any = Object.values(snapshot.val())[0];
        console.log(typeof userData);
        if (userData?.password != password) {
          Toast.show('Invalid Password');
        }
        if (userData?.password === password) {
          Toast.show('Login Successfully');
          navigation.navigate('Post');
        }
      });
  };
  return (
    <View style={{height: '100%', backgroundColor: 'white'}}>
      <View style={styles.topView}>
        <Text style={styles.topTitle}>Log In</Text>
      </View>

      <View style={styles.middleView}>
        <TextInput
          onChangeText={val => {
            setEmail(val);
          }}
          keyboardType={'email-address'}
          activeUnderlineColor={'#fe3c72'}
          placeholder="Email"
          style={styles.textInput}></TextInput>

        <TextInput
          onChangeText={val => {
            setPassword(val);
          }}
          secureTextEntry={true}
          activeUnderlineColor={'#fe3c72'}
          placeholder="Password"
          style={styles.textInput}></TextInput>
      </View>

      <View style={{alignSelf: 'center', marginBottom: 25}}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            loginUser();
          }}>
          <Text style={styles.btnText}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{alignSelf: 'center'}}
          onPress={() => {
            navigation.navigate('Register');
          }}>
          <Text style={{fontSize: 20, fontWeight: '400', color: 'blue'}}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Login;

const styles = StyleSheet.create({
  topView: {
    marginTop: '30%',
  },
  topTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fe3c72',
    alignSelf: 'center',
  },

  middleView: {
    marginHorizontal: 20,
  },
  textInput: {
    marginTop: 40,
    width: '73%',
    alignSelf: 'center',
    fontSize: 20,
    backgroundColor: 'white',
  },
  btn: {
    marginTop: 55,
    backgroundColor: '#fe3c72',
    marginBottom: 15,
    paddingHorizontal: 100,
    paddingVertical: 12,
    borderRadius: 30,
  },
  btnText: {
    color: 'white',
    fontSize: 24,
    fontWeight: '500',
  },
});
