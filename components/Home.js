import React, { useEffect, useState } from 'react';
import { db } from '../auth/firebase';
import { getMissingPerson } from '../database/firestore';
import {ref, onValue} from 'firebase/database';

import { collection, addDoc,getDocs } from "firebase/firestore"; 
import { View, StyleSheet, ScrollView, Button, TouchableOpacity} from 'react-native';
import {
  Box,
  Heading,
  AspectRatio,
  Image,
  Text,
  Center,
  HStack,
  Stack,
  NativeBaseProvider,
} from 'native-base';




export default function Home ({navigation}) {
  const [missingPerson, setMissingPerson] = useState([]);
  const missingPersonKeys = Object.keys(missingPerson);



  const nextpage = (()=>{
    alert("clicked")
    navigation.navigate('Profile')
  })

  useEffect(() => {
   getMissingPeople ()
  }, []);

  const getMissingPeople = (async()=>{
    console.log("im in ")
    try {
      const querySnapshot = await getDocs(collection(db, 'missingPeople'));
      const data = querySnapshot.docs.map((doc)=>({
        id:doc.id,
        ...doc.data()

      }))
      console.log(data)
      setMissingPerson(data);
      console.log(missingPerson);
    }
    catch (error) { }
  })
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
      return (
    <View>
      <View style={{ marginTop: 70 }}>
      <Heading size="md" ml="-1"
       onPress={nextpage}>
        Recent Missing
      </Heading>
      <ScrollView horizontal={true}>
      {missingPerson.map((data) => (
<View>

<View>
<Box
              maxW="80"
              rounded="lg"
              overflow="hidden"
              borderColor="coolGray.200"
              borderWidth="1"
              _dark={{
                borderColor: 'coolGray.600',
                backgroundColor: 'gray.700',
              }}
              _web={{
                shadow: 2,
                borderWidth: 0,
              }}
              _light={{
                backgroundColor: 'gray.50',
              }}>
              <Box>                
                <Image style={styles.image1} source={require('../assets/shot8.jpg')}/>              
              </Box>
              <Stack p="4" space={3}>
                <Stack space={2}>
                  <Heading size="md" ml="-1">
                 {data.firstName}
                  </Heading>
                  <Text
                    fontSize="xs"
                    _light={{
                      color: 'Black.500',
                    }}
                    _dark={{
                      color: 'Black.400',
                    }}
                    fontWeight="500"
                    ml="-0.5"
                    mt="-1">Missing since:{data.missingSince} from:{data.missingFrom}</Text>
                </Stack>
              </Stack>
  </Box>            
           
</View>


</View>

      )) }

</ScrollView>
      
    <Heading size="md" ml="-1">
      Missing people
    </Heading> 
    <ScrollView vertical={true}>
      {missingPerson.map((data) => (
    
        <View style={styles.box1}> 
        <Image style={styles.boximage} source={require('../assets/shot8.jpg')}/>
  <Text style={styles.subhead}>{data.firstName} {data.surname}</Text> 
  <Text style={styles.boxtext}> Missing from:{data.missingFrom}</Text>
 <Text style={styles.boxtext}> Missing Since: {data.missingSince}</Text> 
 <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Profile', {name:data.firstName, lastname:data.surname, from:data.missingFrom, since:data.missingSince, sex:data.gender, Age:data.age, eye:data.eyeColor, hair:data.hairColor, Height:data.height, Weight:data.weight, idMark:data.identityMark, descript:data.description} )} >
        <Text style={styles.buttonText}>View More</Text>
 </TouchableOpacity>
 </View> 

    )) }
</ScrollView>
      </View>
    </View>
  );
      </Center>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECF0F1',
    padding: 8,
  },  
  heading: {
    fontWeight: 'bold',
    margin: 40,
    fontSize:20,
    marginLeft:10,
  },  
  heading2: {
    fontFamily: 'Inter',
    fontWeight: 'bold',
    fontSize: 20,
    margin: 20,
    marginLeft:10,
  },  
  box1:{
    width:400,
    height:180,
    backgroundColor:'#FFFFFF',
    marginTop:10,  
  },
  boximage:{
    width: 150,
    height: 145,
    borderRadius:5,
    marginLeft:-16,
    marginTop: 2,
  },
  boxtext:{
    marginLeft:140,  
  },
  image1:{
    width:240,
    height:180,  
  },
  button:{
    alignItems: "center",
    backgroundColor: '#1B6C72',
    padding: 5,
    marginLeft: 140,
    width: 100,
    height: 30,
  },
  buttonText:{
    color: '#FFFFFF',
  },
  subhead:{
    color: '#1B6C72',
    fontWeight:'bold',
    marginLeft:140,
    marginTop:-145,
},
});