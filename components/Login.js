import React, { Component, useState } from 'react';
import { Alert, Button, TextInput, View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { signIn } from '../auth/auth';
import { auth } from '../auth/firebase';

export default function Login({ navigation }) {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const SignIn = () => {
    signIn(auth, email, password)
    navigation.navigate('Home')
  }



  return (

    <View style={styles.container}>

      <View style={styles.container2}>

        <Image style={styles.logo} source={require("../assets/icon.png")} />


        <Text style={styles.welcome1}>Welcome...</Text>
        <Text style={styles.slogan}>Login to proceed</Text>


        <View style={styles.inputcontainer}>

          <TextInput

            placeholder={'Email'}
            secureTextEntry={false}
            style={styles.input}
            value={email}
            onChangeText={(val) => setEmail(val)}
          />
          <TextInput

            placeholder={'Password'}
            secureTextEntry={true}
            style={styles.input}
            value={password}
            onChangeText={(val) => setPassword(val)}
          />


          <TouchableOpacity onPress={SignIn} style={styles.btnLogin}>
            <Text style={styles.loginText} >
              Log In
            </Text>
          </TouchableOpacity>

          <Text
            style={styles.signText}
            onPress={() => navigation.navigate('signUp')}>
            Don't have account? Click here to Signup
          </Text>
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

  container2: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
    height: 620,
    width: 320,

  },
  loginText: {
    color: 'white',
    
    textAlign: 'center'
  },


  signText :{
    color: '#1B6C72',
    textAlign:'center',
    paddingTop:15
  } ,

  logo: {
    marginTop: '90%',
    margin: 200,
    width: 200,
    borderRadius: 50,

  },
  welcome1: {
    fontWeight: '700',
    fontSize: 26,
    color: '#1B6C72',
    marginTop: -200,
  },

  slogan: {
    fontWeight: 'bold',
    fontSize: 12,
    color: '#1B6C72',

  },

  input: {
    width: 300,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: '#1B6C72',
    marginBottom: '1%',
    marginTop: 30,
  },



  btnLogin: {
    width: 140,
    height: 45,
    backgroundColor: '#1B6C72E5',
    justifyContent: 'center',
    marginLeft: '30%',
    marginTop: 50,
    borderRadius: 27,

  },

  inputcontainer: {
    borderColor: '#fff',
    marginBottom: '100%',
    marginTop: 15,

  },

});

