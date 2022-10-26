import React, { useEffect, useState } from 'react';
import { db } from '../auth/firebase';
import { getMissingPerson } from '../database/firestore';
import {ref, onValue} from 'firebase/database';

import { collection, addDoc,getDocs } from "firebase/firestore"; 
import { View, StyleSheet, ScrollView, Button} from 'react-native';
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

        
<Box >
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image
              source={{
                uri: 'https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg',
              }}
              alt="image" 
            />
          </AspectRatio>
          <Center
            bg="green.400"
            _dark={{
              bg: 'blue.400',
            }}
            _text={{
              color: 'warmGray.50',
              fontWeight: '700',
              fontSize: 'xs',
            }}
            position="absolute"
            bottom="0"
            px="3"
            py="1.5">
            Missing
          </Center>
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              {data.firstName}
            </Heading>
            <Text
              fontSize="xs"
              _light={{
                color: 'red.500',
              }}
              _dark={{
                color: 'red.400',
              }}
              fontWeight="500"
              ml="-0.5"
              mt="-1">
              {data.missingFrom}
            </Text>
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
    
    
    <View >
      <View style={styles.boxMissing} >


        <View >
    <AspectRatio w="70%" ratio={16 / 9}  onPress={nextpage}>
    <Image
                  source={{
                    uri: 'https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg',
                  }}
                  alt="image"
                 
                />
    </AspectRatio>
        </View>
      <View   >
      <Text>{data.firstName} {data.surname}</Text>
      <Text>Missing From: {data.missingFrom}</Text>
      <Button title='View More' onPress={()=> navigation.navigate('Profile', {name:data.firstName, lastname:data.surname, from:data.missingFrom, since:data.missingSince, sex:data.gender, Age:data.age, eye:data.eyeColor, hair:data.hairColor, Height:data.height, Weight:data.weight, idMark:data.identityMark, descript:data.description} )} />
    </View>
    </View>
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
    justifyContent: 'center',    
    backgroundColor: '#ECF0F1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },  
  boxMissing: {
    flexDirection: 'row',
    width:'100%' ,    
    backgroundColor: 'whitesmoke',
    borderRadius: 2,    
    marginTop: 15
  },
});