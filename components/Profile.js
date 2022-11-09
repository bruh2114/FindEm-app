import { Text, View, StyleSheet, ScrollView, Image, TouchableOpacity} from 'react-native';
import { db } from '../auth/firebase';
import React, { useEffect, useState } from 'react';
import { getMissingPerson } from '../database/firestore';
import { collection, addDoc,getDocs } from "firebase/firestore"; 

export default function Profile ({route, navigation}){
    return(
        <ScrollView>
        <View>
          <Image
            style={styles.missingchildprofile}
            source={require('../assets/missing1.jpg')}
          />
          <Text style={styles.fullname}>{route.params.name} {route.params.lastname}</Text>
          <View style={styles.inputcontainer}>         
          <View style={{ flexDirection: 'row'}}>
              <View style={styles.card}>
                <Text> Sex </Text>
                <Text> {route.params.sex} </Text>
              </View>
              <View style={styles.card}>
                <Text> Age </Text>
                <Text> {route.params.Age} </Text>
              </View>            
              <View style={styles.card}>
                <Text> Eye color</Text>
                <Text> {route.params.eye} </Text>
              </View>            
              <View style={styles.card}>
                <Text> Place</Text>
                <Text> {route.params.from} </Text>
              </View>
            </View>           
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.card}>
                <Text> Hair color </Text>
                <Text> {route.params.hair} </Text>
              </View>
              <View style={styles.card}>
                <Text> Weight </Text>
                <Text> {route.params.Weight} </Text>
              </View>            
              <View style={styles.card}>
                <Text> Height </Text>
                <Text> {route.params.Height} </Text>
              </View>
              <View style={styles.card}>
                <Text> Since</Text>
                <Text> {route.params.since} </Text>
              </View>
            </View>
          </View>        
          <Text style={styles.circumstance}>Circumstance</Text>
          <View style={styles.detailContainer}>
            <Text style={styles.circumstance}>
            {route.params.descript}
            </Text>
          </View>
          <View style={styles.buttonbox}>
            <TouchableOpacity style={styles.sharebtn}>
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
  }const styles = StyleSheet.create({
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
      marginTop:2,
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
    }, 
    circumstance: {
      color: '#1B6C72',
      margin: 18,
      marginTop:20,
    },
    buttonbox: {
      marginLeft: 40,
    },  sharebtn: {
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
    },  missingchildprofile: {
      marginLeft: 19,
      width: 330,
      height: 220,
    },  card: {
      backgroundColor:"#1B6C72" ,
      marginTop: 3 ,
      marginLeft:2 ,
      width: 70,
      height: 70,
      color: 'white',
      textAlign:'center',
    },
  });