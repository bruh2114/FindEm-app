import { Text, View, StyleSheet, ScrollView, Image, TouchableOpacity} from 'react-native';
import { db } from '../auth/firebase';
import React, { useEffect, useState } from 'react';
import { getMissingPerson } from '../database/firestore';
import { collection, addDoc,getDocs } from "firebase/firestore"; 

export default function Profile ({route, navigation}){
    return(
        <View>
            <Image></Image>
        <Text style={styles.fullname}>{route.params.name} {route.params.lastname}</Text>
            
            <View >
            <Text style={styles.missing}>Missing From: {route.params.from}</Text>
            <Text style={styles.missing}>Missing Since: {route.params.since}</Text>
            </View>

            <View style={styles.containerDetail}>
                <Text>Sex</Text>
                <Text>Age</Text>
                <Text>Eye Color</Text>
                <Text>Hair Color</Text>
                <Text>Height</Text>
                <Text>Weight</Text>
                
                <View style={styles.detail}>
                    <Text>{route.params.sex}</Text>
                    <Text>{route.params.Age}</Text>
                    <Text>{route.params.eye}</Text>
                    <Text>{route.params.hair}</Text>
                    <Text>{route.params.Height}</Text>
                    <Text>{route.params.Weight}</Text>
                </View>
            </View>

            <View style={styles.detailContainer}>
                <Text>Circumstance {route.params.descript}</Text>
            </View>

            <TouchableOpacity
                title="Message"
            />
            <TouchableOpacity
                title="Share"
            />
            
        </View>
    )
}

const styles = StyleSheet.create({
    fullname:{
        color: '#1B6C72',
        fontSize: 32,
        textAlign: 'center',
        fontWeight: 'bold',

    },
    missing:{
        color: '#1B6C72',
        fontSize: 14,
        fontWeight: 'bold',

    },
    containerDetail:{
        flexDirection: 'row'
    }
    detail:{
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
})