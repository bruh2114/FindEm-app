import React, { useEffect, useState } from 'react';
import { db } from '../auth/firebase';
import { collection, addDoc, getDocs } from "firebase/firestore";
import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
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

import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';


const Example = ({ navigation }) => {
  const [missingPerson, setMissingPerson] = useState([]);
  const missingPersonKeys = Object.keys(missingPerson);



  const nextpage = (() => {
    alert("clicked")
    navigation.navigate('Profile')
  })

  useEffect(() => {
    getMissingPeople()
  }, []);

  const getMissingPeople = (async () => {
    console.log("im in ")
    try {
      const querySnapshot = await getDocs(collection(db, 'missingPeople'));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()

      }))
      console.log(data)
      setMissingPerson(data);
      console.log(missingPerson);
    }
    catch (error) { }
  })
  return (

    <View style={styles.container}>
      <Text style={styles.heading}>RECENT POSTS</Text>
      <ScrollView>
        <ScrollView horizontal={true}>
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
              <Image style={styles.image1} source={require('../assets/shot8.jpg')} />
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
                  mt="-1">Missing 10/06/2022 Kimberley</Text>
              </Stack>
            </Stack>
          </Box>
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
              <Image style={styles.image1} source={require('../assets/shot8.jpg')} />
            </Box>
            <Stack p="4" space={3}>
              <Stack space={2}>
                <Heading size="md" ml="-1">
                  Kyle Fox
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
                  mt="-1">Missing 10/08/2022 Kimberley</Text>
              </Stack>
            </Stack>
          </Box>
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
              <Image style={styles.image1} source={require('../assets/shot8.jpg')} />
            </Box>
            <Stack p="4" space={3}>
              <Stack space={2}>
                <Heading size="md" ml="-1">
                  Johannes Melins
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
                  mt="-1">Missing 10/12/2022 Phutanang</Text>
              </Stack>
            </Stack>
          </Box>
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
              <Image style={styles.image1} source={require('../assets/shot8.jpg')} />
            </Box>
            <Stack p="4" space={3}>
              <Stack space={2}>
                <Heading size="md" ml="-1">
                  yvonne
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
                  mt="-1">Missing 10/15/2022 Galeshewe.</Text>
              </Stack>
            </Stack>
          </Box>
        </ScrollView>
        <Text style={styles.heading2}>Missing people </Text>
        <View style={styles.box1}>
          <Image style={styles.boximage} source={require('../assets/shot8.jpg')} />
          <Text style={styles.subhead}>Belinda jacobs</Text>
          <Text style={styles.boxtext}> Missing from:CartersGlen 335 slowmo str</Text>
          <Text style={styles.boxtext}> Missing Since: 16/12/22 19:30 CAT</Text>
          <TouchableOpacity title='View More' onPress={() => navigation.navigate('Profile', { name: data.firstName, lastname: data.surname, from: data.missingFrom, since: data.missingSince, sex: data.gender, Age: data.age, eye: data.eyeColor, hair: data.hairColor, Height: data.height, Weight: data.weight, idMark: data.identityMark, descript: data.description })} />
        </View>

        <View style={styles.box1}>
          <Image style={styles.boximage} source={require('../assets/shot4.jpg')} />
          <Text style={styles.subhead}>Melinda Abrahamns</Text>
          <Text style={styles.boxtext}> Missing from:CartersGlen 335 slowmo str</Text>
          <Text style={styles.boxtext}> Missing Since: 16/12/22 19:30 CAT </Text>
          <TouchableOpacity style={styles.button} onPress={nextpage}>
            <Text> View more</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.box1}>
          <Image style={styles.boximage} source={require('../assets/shot4.jpg')} />
          <Text style={styles.subhead}>Brendan Mellen</Text>
          <Text style={styles.boxtext}> Missing from:CartersGlen 335 slowmo str</Text>
          <Text style={styles.boxtext}> Missing Since: 16/12/22 19:30 CAT</Text>
          <TouchableOpacity style={styles.button} onPress={nextpage}>
            <Text> View more</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
export default function Test() {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Example />
      </Center>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECF0F1',
    padding: 8,
  },
  heading: {
    fontWeight: 'bold',
    margin: 40,
    fontSize: 20,
    marginLeft: 10,
  },
  heading2: {
    fontFamily: 'Inter',
    fontWeight: 'bold',
    fontSize: 20,
    margin: 20,
    marginLeft: 10,
  },
  box1: {
    width: 320,
    height: 150,
    backgroundColor: '#FFFFFF',
    marginTop: 10,
  },
  boximage: {
    width: 150,
    height: 145,
    borderRadius: 5,
    marginLeft: -16,
    marginTop: 2,
  },
  boxtext: {
    marginLeft: 140,
  },
  image1: {
    width: 240,
    height: 180,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 5,
    marginLeft: 140,
    width: 80,
  },
  subhead: {
    fontWeight: 'bold',
    marginLeft: 140,
    marginTop: -145,
  },
});