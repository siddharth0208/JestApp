import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import uuid from 'react-native-uuid';
import database from '@react-native-firebase/database';
import Toast from 'react-native-simple-toast';
import {TextInput} from 'react-native-paper';
import {RegisterDataType} from './Type';

const Register = ({navigation}: {navigation: any}) => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [number, setNumber] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const registerUser = async () => {
    if (
      name == '' ||
      name.length > 6 ||
      email == '' ||
      number == '' ||
      password == '' ||
      confirmPassword == '' ||
      password != confirmPassword
    ) {
      Alert.alert('fill all the field');
      return false;
    }
    let data: RegisterDataType = {
      id: uuid.v4(),
      name: name,
      email: email,
      number: number,
      password: password,
      confirmPassword: confirmPassword,
    };
    database()
      .ref('/users/' + data.id)
      .set(data)
      .then(() => {
        Toast.show('Register Successfully');
        setName('');
        setEmail('');
        setNumber('');
        setPassword('');
        setConfirmPassword('');
        navigation.navigate('Login');
      });
  };

  return (
    <ScrollView style={{height: '100%', backgroundColor: 'white'}}>
      <View style={styles.topView}>
        <Text style={styles.topTitle}>Sign Up</Text>
      </View>

      <View style={styles.middleView}>
        <TextInput
          onChangeText={name => {
            setName(name);
          }}
          activeUnderlineColor={'#fe3c72'}
          placeholder="Full Name"
          style={styles.textInput}></TextInput>

        <TextInput
          onChangeText={email => {
            setEmail(email);
          }}
          keyboardType={'email-address'}
          activeUnderlineColor={'#fe3c72'}
          placeholder="Email"
          style={styles.textInput}></TextInput>

        <TextInput
          onChangeText={num => {
            setNumber(num);
          }}
          keyboardType={'number-pad'}
          activeUnderlineColor={'#fe3c72'}
          placeholder="Number"
          style={styles.textInput}></TextInput>

        <TextInput
          onChangeText={pass => {
            setPassword(pass);
          }}
          activeUnderlineColor={'#fe3c72'}
          placeholder="Password"
          secureTextEntry={true}
          style={styles.textInput}></TextInput>

        <TextInput
          onChangeText={cpass => {
            setConfirmPassword(cpass);
          }}
          activeUnderlineColor={'#fe3c72'}
          placeholder="Confirm Password"
          style={styles.textInput}
          secureTextEntry={true}></TextInput>
      </View>

      <View style={{alignSelf: 'center', marginBottom: 25}}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            registerUser();
          }}>
          <Text style={styles.btnText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{alignSelf: 'center'}}
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <Text style={{fontSize: 20, fontWeight: '400', color: 'blue'}}>
            Log in
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
export default Register;

const styles = StyleSheet.create({
  topView: {
    marginTop: 30,
  },
  topTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fe3c72',
    alignSelf: 'center',
  },

  middleView: {
    flex: 1,
    marginHorizontal: 20,
  },
  textInput: {
    marginTop: 40,
    width: '74%',
    alignSelf: 'center',
    fontSize: 20,
    backgroundColor: 'white',
  },
  btn: {
    backgroundColor: '#fe3c72',
    marginBottom: 9,
    paddingHorizontal: 100,
    paddingVertical: 12,
    borderRadius: 30,
    marginTop: 35,
  },
  btnText: {
    color: 'white',
    fontSize: 24,
    fontWeight: '500',
  },
});
