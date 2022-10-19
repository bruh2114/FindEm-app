
import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';
import Constants from 'expo-constants';

// or any pure javascript modules available in npm

export default function Home() {
  return (
    <View style={styles.container}>



      <View
        style={{
          width: '100%',
          height: 2,
          marginTop: 15,
          marginBottom: 10,
          backgroundColor: '#1B6C72',
        }}>
      </View>

      <Text style={styles.headingMissing}> Recent Post</Text>

      <View style={{ flexDirection: 'row' }}>
      <ScrollView horizontal= {true}>
        <View style={styles.card}>

          <Image
            style={styles.logo} source={require('../assets/missing2.jpg')} />

          <View style={styles.box1}>
            <Text style={styles.headings}>Kylie Fox</Text>
            <Text style={styles.heading1}> Missing 10/06/2022 Kimberley</Text>
          </View>


        </View>

        <View style={styles.card}>

<Image
  style={styles.logo} source={require('../assets/missing2.jpg')} />

<View style={styles.box1}>
  <Text style={styles.headings}>Kylie Fox</Text>
  <Text style={styles.heading1}> Missing 10/06/2022 Kimberley</Text>
</View>


</View>


        <View style={styles.card}>

<Image
  style={styles.logo} source={require('../assets/missing2.jpg')} />

<View style={styles.box1}>
  <Text style={styles.headings}>Kylie Fox</Text>
  <Text style={styles.heading1}> Missing 10/06/2022 Kimberley</Text>
</View>


</View>
        
</ScrollView>

      </View>
     






      <Text style={styles.headingMissing}> Missing person </Text>



      <View>

        <View style={styles.cardMissingPerson}>
          <View>

            <Image style={styles.missingImage} source={require('../assets/missing2.jpg')} />

          </View>

          <View>
            <Text style={styles.paragraph2}>Scott Sinclair </Text>
            <Text style={styles.paragraph3}>  Missing From: CartersGlen 335 slowmo str
            </Text>

            <Text style={styles.paragraph3}>

              Missing Since: 16/12/22 19:30 CAT

            </Text>
          </View>


        </View>

        <View style={styles.cardMissingPerson}>
          <View>

            <Image style={styles.missingImage} source={require('../assets/missing2.jpg')} />

          </View>

          <View>
            <Text style={styles.paragraph2}>Scott Sinclair </Text>
            <Text style={styles.paragraph3}>  Missing From: CartersGlen 335 slowmo str
            </Text>

            <Text style={styles.paragraph3}>

              Missing Since: 16/12/22 19:30 CAT

            </Text>
          </View>


        </View>
        <View style={styles.cardMissingPerson}>
          <View>

            <Image style={styles.missingImage} source={require('../assets/missing2.jpg')} />

          </View>

          <View>
            <Text style={styles.paragraph2}>Scott Sinclair </Text>
            <Text style={styles.paragraph3}>  Missing From: CartersGlen 335 slowmo str
            </Text>

            <Text style={styles.paragraph3}>

              Missing Since: 16/12/22 19:30 CAT

            </Text>
          </View>


        </View>





      </View>




    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },


  card: {
    width: 190,
    height: 250,
    backgroundColor: 'white',
    marginLeft: 5,
    marginTop: 5,
  },

  headingMissing: {
    fontSize: 22,
    color: 'black',
    marginTop: 8,
  },

  cardMissingPerson: {
    width: 600,
    height: 200,
    backgroundColor: 'white',
    marginTop: 7,
    flexDirection: 'row'

  },

  missingImage: {
    height: 200
  } ,

  box1: {
    backgroundColor: '#1B6C72',
    width: 190,
    height: 55,
    borderRadius: 5,
    marginTop: '-39%',
   
   
 },

 box2:{
  backgroundColor: '#1B6C72',
     width: 190,
     height: 55,
     borderRadius: 5,
   marginTop: '-29%',
  },




});
