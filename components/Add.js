import React, { Component } from 'react';
import { Alert, Button, TextInput, View, StyleSheet,Text,TouchableOpacity,ToastAndroid, ScrollView} from 'react-native';
 import{Image} from 'react-native';
 import { Avatar } from 'react-native-paper';
 import { launchImageLibrary} from 'react-native-image-picker'

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
          secureTextEntry={true}
          style={styles.input}
        />
      <TextInput
         
          placeholder={'Surname'}
          secureTextEntry={true}
          style={styles.input}
        />
     
          <TextInput
         
         
          placeholder={'age'}
          secureTextEntry={true}
          style={styles.input3}
        />
          <TextInput
         
         
          placeholder={'gender'}
          secureTextEntry={true}
          style={styles.input4}
        />
          <TextInput
         
         
          placeholder={'Eye-color'}
          secureTextEntry={true}
          style={styles.input}
        />
          
         <TextInput
         
          placeholder={'Hair Color'}
          secureTextEntry={true}
          style={styles.input}
        />
         <TextInput
         
          placeholder={'Height'}
          secureTextEntry={true}
          style={styles.input7}
        />
         <TextInput
         
         
          placeholder={'Weight'}
          secureTextEntry={true}
          style={styles.input8}
        />
         <TextInput
         
         
          placeholder={'Missing From?(optional)'}
          secureTextEntry={true}
          style={styles.input}
        />
         <TextInput
         
         
          placeholder={'Missing Since?(optional)'}
          secureTextEntry={true}
          style={styles.input}
        />
        <TextInput
         
          placeholder={'Identify Mark'}
          secureTextEntry={true}
          style={styles.input}
        />
          <TextInput

          placeholder={'Specify Description'}
          secureTextEntry={true}
          style={styles.input12}
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
        <Text  style={styles.addText2} onPress={nextpage}>
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
    marginTop:13,
  
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
    marginTop:13,
 
  },
  input4: {
    width: 100,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderRadius: -50,
    borderColor: '#000',
    marginBottom: '1%',
    marginTop:-47,
    marginLeft:190,
  },

   input7: {
  width: 180,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderRadius: -50,
    borderColor: '#000',
    marginBottom: '1%',
    marginTop:13,
  },
   input8:{
    width: 100,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderRadius: -50,
    borderColor: '#000',
    marginBottom: '1%',
    marginTop:-47,
    marginLeft:190,
  },

  input12: {
    width: 288,
    height: 100,
    padding: 10,
    borderWidth: 1,
    borderRadius: -50,
    borderColor: '#1B6C72',
    marginBottom: '1%',
    marginTop:13,
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

inputcontainer:{
    borderColor: '#fff',
    marginBottom: '20%',
    marginTop:105,
    marginLeft:-10,
},

});

