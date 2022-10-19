import React, { Component } from 'react';
import { Alert, Button, TextInput, View, StyleSheet, Text, TouchableOpacity, ActivityIndicator, Image } from 'react-native';
import { SignUp } from '../auth/auth';
import { useState } from 'react';
import { auth } from '../auth/firebase';


export default function Signup({ navigation }) {

  const nextpage = () => {
    navigation.navigate('login')
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const registerUser = () => {
    

    navigation.navigate('home')
   // SignUp(auth, email, password)

  }
  return (

    <View style={styles.container}>

      <View style={styles.container2}>


        <View style={styles.logo1}>

          <Image style={styles.logo} source={require("../assets/icon.png")} />


        </View>

        <View style={styles.box}>

          <View
            style={{

              width: '100%',
              height: 2,
              marginTop: -460,
              marginBottom: 10,


              backgroundColor: '#73A9AD'

            }} />
          <Text style={styles.signin}>Signup</Text>
          <View>
            <Text style={styles.welcome1}>Welcome...</Text>
          </View>

          <Text style={styles.slogan}>Sign up to proceed</Text>

        </View>


        <TouchableOpacity>


        </TouchableOpacity>


        <View style={styles.inputcontainer}>
          <TextInput

            placeholder={'Full Names'}
            style={styles.input}
          />
          <TextInput


            placeholder={'Cell No.'}
            secureTextEntry={true}
            style={styles.input}
          />
          <TextInput


            placeholder={'E-mail'}
            style={styles.input}
            value={email}
            onChangeText={(val) => setEmail(val)}
          />
          <TextInput


            placeholder={'Password'}
            secureTextEntry={true}
            style={styles.input}
            onChangeText={(val) => setPassword(val)}
            maxLength={15}
          />



          <TouchableOpacity style={styles.signupBtn} onPress={registerUser}>
            <Text style={styles.signupText} >
              Signup
            </Text>


          </TouchableOpacity>
        </View>
      </View>
    </View>


  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#73A9AD',
  },
  box: {

  },
  signin: {
    marginTop: '-149%',
    marginBottom: 360,
    fontWeight: '700',
    fontSize: 26,
    color: '#73A9AD',

  },

  container2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,

    width: 360,
    marginTop: 50,

  },

  logo1: {
    marginTop: 200,
    marginBottom: -5,
  },

  logo: {
    marginTop: '50%',
    margin: 260,
    width: 200,
    height: 150,
    borderRadius: 5,
    backgroundColor: '#73A9AD ',

  },
  welcome1: {
    fontWeight: '700',
    fontSize: 26,
    color: '#1B6C72',
    marginTop: -10,

  },
  slogan: {
    fontWeight: 'bold',
    fontSize: 12,
    color: '#1B6C72',
    marginTop: -10,

  },

  input: {
    width: 300,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: '#1B6C72',
    marginBottom: '1%',
    marginTop: 13,
  },
  signupText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
    textAlign: 'center',

  },

  signupBtn: {
    width: 140,
    height: 45,
    backgroundColor: '#1B6C72E5',
    justifyContent: 'center',
    marginLeft: '30%',
    marginTop: 4,
    borderRadius: 27,

  },

  inputcontainer: {
    borderColor: '#fff',
    marginBottom: '90%',
    marginTop: -200,

  },


});

