import React, { Component } from 'react';
import { Alert, Button, TextInput, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Image } from 'react-native';


function Welcome({ navigation }) {

  return (

    <View style={styles.container}>
      <View style={styles.container2}>

        <Image style={styles.logo} source={require("../assets/icon.png")} />
        <Text style={styles.welcome1}>Welcome To</Text>


        <View style={styles.welcomeBtn}>

          <TouchableOpacity

            onPress={() => navigation.navigate('login')}
          >
            <Text style={styles.welcomeText}>
              Get started
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
    height: 'auto',

  },

  container2: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
    height: 620,
    width: 320,

  },
  logo: {


    width: 200,
    borderRadius: 50,
  },

  welcome1: {
    fontWeight: '700',
    fontSize: 26,
    color: '#1B6C72',
    

  },

  welcomeText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
    textAlign: 'center',


  },

  welcomeBtn: {
    width: 140,
    height: 45,
    backgroundColor: '#1B6C72E5',
    justifyContent: 'center',
    marginLeft: '10%',
    marginTop: 50,
    borderRadius: 27,

  },

  inputcontainer: {
    borderColor: '#fff',
    marginBottom: '100%',
    marginTop: 15,

  }
});

export default Welcome