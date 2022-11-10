import { Text, View, StyleSheet, ScrollView, Image, TouchableOpacity,Share } from 'react-native';
import { db } from '../auth/firebase';
import React, { useEffect, useState } from 'react';
import { getMissingPerson } from '../database/firestore';
import { collection, addDoc, getDocs } from "firebase/firestore";

export default function Profile({ route, navigation }) {



  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <ScrollView>
      <View>
        <Image
          style={styles.missingchildprofile}
          source={{uri : route.params.image}} 
        />
        <Text style={styles.fullname}>{route.params.name} {route.params.lastname}</Text>
        <View style={styles.inputcontainer}>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.card}>
              <Text style={styles.text}> Sex </Text>
              <Text style={styles.text}> {route.params.sex} </Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.text}> Age </Text>
              <Text style={styles.text}> {route.params.Age} </Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.text}> Eye color</Text>
              <Text style={styles.text}> {route.params.eye} </Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.text}> Place</Text>
              <Text style={styles.text}> {route.params.from} </Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.card}>
              <Text style={styles.text}> Hair color </Text>
              <Text style={styles.text}> {route.params.hair} </Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.text}> Weight </Text>
              <Text style={styles.text}> {route.params.Weight} </Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.text}> Height </Text>
              <Text style={styles.text}> {route.params.Height} </Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.text}> Since</Text>
              <Text style={styles.text}> {route.params.since} </Text>
            </View>
          </View>
        </View>
        <Text style={styles.circumstance}>Circumstance</Text>
        <View style={styles.detailContainer}>
          <Text style={styles.text1}>
            {route.params.descript}
          </Text>
        </View>
        <View style={styles.buttonbox}>
          <TouchableOpacity style={styles.sharebtn}  onPress={onShare}>
            <Text style={styles.textStyle}>share</Text>
            <Image
              style={styles.sharepic}
              source={require('../assets/share-removebg-preview (1).png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
} const styles = StyleSheet.create({
  fullname: {
    color: '#1B6C72',
    fontSize: 32,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  detailContainer: {
    borderColor: '#fff',
    borderRadius: 5,
    backgroundColor: '#FFF',
    height: 130,
    width: 300,
    marginTop: 2,
    marginLeft: 20,
  },
  inputcontainer: {
    marginBottom: '2%',
    marginTop: 10,
    marginLeft: 20,
    width: 300,
    height: 130,
    borderRadius: 5,
  },
  textStyle: {
    color: '#FFF',
    textAlign: 'center',
  },
  circumstance: {
    color: '#1B6C72',
    margin: 18,
    marginTop: 20,
    fontWeight:'bold',
  },
  buttonbox: {
    marginLeft: 40,
  }, sharebtn: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#1B6C72',
    borderRadius: 15,
    width: 90,
    padding: 8,
    borderWidth: 1,
    borderColor: '#007AFF',
    marginLeft: 90,
    marginTop: 10,
    margin: 60,
  },
  sharepic: {
    width: 30,
    height: 20,
    marginLeft: 40,
    marginTop: -16,
  }, missingchildprofile: {
    marginLeft: 19,
    width: 330,
    height: 220,
  }, card: {
    backgroundColor: "#1B6C72",
    marginTop: 3,
    marginLeft: 2,
    width: 70,
    height: 70,
    color: 'white',
    textAlign: 'center',
  },
  text:{
color:'white'
  },
  text1:{
    fontFamily:'Inika',
    fontSize:16,

  },
});