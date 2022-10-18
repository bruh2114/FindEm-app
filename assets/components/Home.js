import * as React from 'react';
import { Text, View, StyleSheet, ScrollView,Image } from 'react-native';
import Constants from 'expo-constants';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

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
          style={styles.logo} source={require('../assets/images/women.png')}/>

          <View style={styles.box1}>
          <Text style={styles.headings}>Kylie Fox</Text>
          <Text style={styles.heading1}> Missing 10/06/2022 Kimberley</Text>
        </View>
        </View>
        <View style={styles.card}>

         <Image style={styles.logo} source={require('../assets/images/missing4.jfif')}/>

          <View style={styles.box1}>
          <Text style={styles.headings}>Kylie Fox</Text>
          <Text style={styles.heading1}> Missing 10/08/2022 Roodepan</Text>
        </View>

        </View>

        <View style={styles.card}>

        <Image
          style={styles.logo} source={require('../assets/images/missing3.jfif')}/>

          <View style={styles.box2}>
          <Text style={styles.headings}>Kylie Fox</Text>
          <Text style={styles.heading1}> Missing 10/12/2022 Floors</Text>
        </View>
        </View>

        <View style={styles.card}>
        <Image
          style={styles.logo} source={require('../assets/images/missing5.jfif')}/>
          <View style={styles.box2}>
          <Text style={styles.headings}>Kylie Fox</Text>
          <Text style={styles.heading1}> Missing 10/15/2022 Kimberley </Text>
        </View>

     
        </View>
        
      </ScrollView>
      </View>

     
        <Text style={styles.headingMissing}> Missing person </Text>



        <View>
        
          <View style={styles.cardMissingPerson}>
          <View> 
         <Image style={styles.logo2} source={require('../assets/images/men.png')}/>  </View>

           <View> <Text style={styles.paragraph2}>Scott Sinclair </Text>
        <Text style={styles.paragraph3}>
          {' '}
          Missing From: CartersGlen 335 slowmo str{' '}
        </Text>
        <Text style={styles.paragraph3}>
          {' '}
          Missing Since: 16/12/22 19:30 CAT{'  '}

        </Text> 
         </View>
          
          </View>

           <View
        style={{
          width: '100%',
          height: 1,
          marginTop: 2,
          marginBottom: 10,
          backgroundColor: '#1B6C72',
        }}>
        </View>

          <View style={styles.cardMissingPerson}>

           <View >  <Image style={styles.logo2} source={require('../assets/images/men.png')}/> </View>

           <View> <Text style={styles.paragraph2}>Scott Sinclair </Text>
        <Text style={styles.paragraph3}>
          {' '}
          Missing From: CartersGlen 335 slowmo str{' '}
        </Text>
        <Text style={styles.paragraph3}>
          {' '}
          Missing Since: 16/12/22 19:30 CAT{'  '} 
           </Text>
            </View>
             
             </View>

 <View
        style={{
          width: '100%',
          height: 1,
          marginTop: 2,
          marginBottom: 40,
          backgroundColor: '#1B6C72',
        }}>
        </View>

<View style={styles.cardMissingPerson}>
          <View   > <Image style={styles.logo2} source={require('../assets/images/young.png')}/> </View>

          <View><Text style={styles.paragraph2}>Scott Sinclair </Text>
          <Text style={styles.paragraph3}>
          {' '}
            Missing From: CartersGlen 335 slowmo str{' '}
        </Text>
        <Text style={styles.paragraph3}>
          {' '}
          Missing Since: 16/12/22 19:30 CAT{'  '} 
           </Text>
           </View>

       </View>
          </View>

           <View
        style={{
          width: '100%',
          height: 1,
          marginTop: 2,
          marginBottom: 40,
          backgroundColor: '#1B6C72',
        }}>
        </View>

     

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#FFFFFF',
    padding: 8,
  },

  card: {
    width: 190,
    height: 250,
    backgroundColor: 'white',
    marginLeft: 5,
     marginTop:5,
  },

  headingMissing: {
    fontSize: 22,
    color:'black',
    marginTop:8,
  },

  cardMissingPerson: {
    width: 600,
    height: 100,
    backgroundColor: 'white',
    marginTop: 7,
   flexDirection:'row'
   
  },


  logo:{
    height:250,
    width:190,
    marginTop:1,
    borderRadius:5,
 
  },
  logo2:{
    height: 99,
    width: 99,
  },
   paragraph2:{
  fontWeight: 'bold',
    TextAlign: 'left',
    marginTop: '-110',
    marginLeft: 5,
  
  },

  paragraph3:{
     TextAlign: 'left',
    marginTop: '10',
    fontFamily: 'Inter',
    fontSize: 13,
  },
  headings:{
fontfamily: 'Inter',
    fontWeight: 'bold',
    fontsize: 10,
    lineheight: 12,
    color: '#FFFFFF',
 
  },
  heading1:{
 fontfamily: 'Inter',
    fontweight: 600,
    fontsize: 9,
    lineheight: 12,
    color: '#FFFFFF',
  },
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
