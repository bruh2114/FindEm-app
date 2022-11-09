import React, { Component, useState } from 'react';
import { Alert, Button, TextInput, View, StyleSheet,Text,TouchableOpacity,ToastAndroid, ScrollView} from 'react-native';
 import{Image} from 'react-native';
 import { Avatar } from 'react-native-paper';
 import { launchImageLibrary} from 'react-native-image-picker';
 import { addMissingPerson } from '../database/firestore';
 import { db } from '../auth/firebase';

const Add = ({navigation}) => {

  const [Pic, setPic] = React.useState('');

    const setToastMsg = msg => {
    ToastAndroid.showWithGravity(msg, ToastAndroid.SHORT, ToastAndroid.CENTER)
  }

  const uploadImage = () => {
    let options = {
      mediaType: 'photo',
      quality: 1,
      includeBase64: true,
    }

  launchImageLibrary(options, response => {
      if(response.didCancel){
        setToastMsg('Cancelled image selection')
      }else if(response.errorCode == 'Permission'){
      setToastMsg('Permission not satisfied')
      }else if(response.errorCode == 'Permission'){
        setToastMsg(response.errorMessage)
      }else if(response.assets[0].fileSize > 2097152){
        Alert.alert('Maximum image size exceeded', 'Please choose image under 2 MB', [{text: 'OK'}])
      }else{
        setPic(response.assets[0].base64)
      }
    })
  }
  

const nextpage = () => {
  navigation.navigate('personsinfo')
}

const [firstName,setName] = useState();
const [surname,setSurname] = useState();
const [age,setAge] = useState();
const [gender,setGender] = useState();
const [eyeColor,setEyeColor] = useState();
const [hairColor,setHairColor] = useState();
const [height,setHeight] = useState();
const [weight,setWeight] = useState();
const [missingFrom,setMissingFrom] = useState();
const [missingSince,setMissingSince] = useState();
const [identityMark,setIDMark] = useState();
const [description,setDescription] = useState();


const addInfo = () => {
  addMissingPerson(db, firstName, surname, age, gender, eyeColor, hairColor, height, weight, missingFrom, missingSince, identityMark, description)
  navigation.navigate('Home')
}

   return (
     <ScrollView>
     <View style={styles.container}>



     <View style={styles.header}>
      <Text >Add Missing PERSON</Text> 
    <View style={styles.inputcontainer}>

         <TouchableOpacity
         
          onPress={() => alert('pressed')}
          underlayColor="rgba(0,0,0,0)"></TouchableOpacity>
        <Avatar.Image style={styles.img}
          size={250}
          source={{ uri: 'data:image/png;base64,' + Pic }}
        />
<View>
     <TouchableOpacity  mode="contained" onPress={() => uploadImage()}style={styles.add} >
         <Image source={require('../assets/Plus-removebg-preview.png')}/>
        </TouchableOpacity>
</View>
      
     <TextInput
         
          placeholder={'Name'}
          style={styles.input}
          value={firstName}
          onChangeText={(val) => setName(val)}
        />
      <TextInput
         
          placeholder={'Surname'}
          style={styles.input}
          value={surname}
          onChangeText={(val) => setSurname(val)}
        />
     
          <TextInput
         
         
          placeholder={'age'}
          style={styles.input3}
          value={age}
          onChangeText={(val) => setAge(val)}
        />
          <TextInput
         
         
          placeholder={'gender'}
          style={styles.input4}
          value={gender}
          onChangeText={(val) => setGender(val)}
        />
          <TextInput
         
         
          placeholder={'Eye-color'}
          style={styles.input}
          value={eyeColor}
          onChangeText={(val) => setEyeColor(val)}
        />
          
         <TextInput
         
          placeholder={'Hair Color'}
          style={styles.input}
          value={hairColor}
          onChangeText={(val) => setHairColor(val)}
        />
         <TextInput
         
          placeholder={'Height'}
          style={styles.input7}
          value={height}
          onChangeText={(val) => setHeight(val)}
        />
         <TextInput
         
         
          placeholder={'Weight'}
          style={styles.input8}
          value={weight}
          onChangeText={(val) => setWeight(val)}
        />
         <TextInput
         
         
          placeholder={'Missing From?(optional)'}
          style={styles.input}
          value={missingFrom}
          onChangeText={(val) => setMissingFrom(val)}
        />
         <TextInput
         
         
          placeholder={'Missing Since?(optional)'}
          style={styles.input}
          value={missingSince}
          onChangeText={(val) => setMissingSince(val)}
        />
        <TextInput
         
          placeholder={'Identity Mark'}
          style={styles.input}
          value={identityMark}
          onChangeText={(val) => setIDMark(val)}
        />
          <TextInput

          placeholder={'Special Description'}
          style={styles.input12}
          value={description}
          onChangeText={(val) => setDescription(val)}
        />
   
        <View  style={styles.addBtn}>
        <TouchableOpacity>
          <Text  style={styles.addText} onPress={nextpage}>
          Detect Location
          </Text>  
      </TouchableOpacity>
      
     </View>
     <View  style={styles.addBtn2}>
      <TouchableOpacity>
        <Text  style={styles.addText2} onPress={addInfo}>
          Submit
        </Text>
      </TouchableOpacity>
  </View>
        </View>
         </View>
           </View>
            </ScrollView>
    );
  }

  export default Add;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#FFFFFF',
    height: '100%',
 },

header:{
fontWeight:'700',
fontSize:26, 
marginLeft:30,

},
img:{
  marginLeft:10,
  backgroundColor:'#1B6C72',
 
  marginTop:-70,
},
add:{
  marginLeft:170,
  marginTop:-90,
},
  input: {
    width: 288,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderRadius: -50,
    borderColor: '#000',
    marginBottom: '1%',
    marginTop: 13,
  },
  // imglogo:{
  //   marginLeft:90,
  //   width:80,
  //   height:80,
  //   marginTop:-60,
  // },
  //addimagebuttons:{
//backgroundColor:'#000',
  //},

  input3:{
 width: 180,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderRadius: -50,
    borderColor: '#000',
    marginBottom: '1%',
    marginTop: 13,

  },
  input4: {
    width: 100,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderRadius: -50,
    borderColor: '#000',
    marginBottom: '1%',
    marginTop: -47,
    marginLeft: 190,
  },

  input7: {
    width: 180,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderRadius: -50,
    borderColor: '#000',
    marginBottom: '1%',
    marginTop: 13,
  },
  input8: {
    width: 100,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderRadius: -50,
    borderColor: '#000',
    marginBottom: '1%',
    marginTop: -47,
    marginLeft: 190,
  },

  input12: {
    width: 288,
    height: 100,
    padding: 10,
    borderWidth: 1,
    borderRadius: -50,
    borderColor: '#1B6C72',
    marginBottom: '1%',
    marginTop: 13,
  },

   addText:{
    fontSize:18,
    color:'#fff',
    fontWeight:'600',
    textAlign:'center',
  
  },
addText2:{
    fontSize:18,
    color:'#fff',
    fontWeight:'600',
    textAlign:'center',
 
},
addBtn:{
width:240,
height:30,
backgroundColor:'#1B6C72E5',
justifyContent:'center',
marginLeft:'10%',
marginTop:4,
borderRadius:27,
margin:-5,

},
addBtn2:{
width:240,
height:30,
backgroundColor:'#1B6C72E5',
justifyContent:'center',
marginLeft:'10%',
marginTop:30,
borderRadius:27,

  },
  signupBtn2: {
    width: 240,
    height: 30,
    backgroundColor: '#1B6C72E5',
    justifyContent: 'center',
    marginLeft: '10%',
    marginTop: 30,
    borderRadius: 27,

  },

  inputcontainer: {
    borderColor: '#fff',
    marginBottom: '20%',
    marginTop:105,
    marginLeft:-10,
},

});