import React, { Component } from 'react';
import { Alert, Button, TextInput, View, StyleSheet,Text,TouchableOpacity, } from 'react-native';
 import{Image} from 'react-native';



export default function Add ({navigation}){

const nextpage = () => {
  navigation.navigate('')
}


   return (
     <View style={styles.container}>
      <View style={styles.header}>
      Add Missing PERSON 
    <View style={styles.inputcontainer}>
     <Image style={styles.imglogo} source={require("../assets/addimage.png")}/>
      
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
   
        <View  style={styles.signupBtn}>
        <TouchableOpacity>
          <Text  style={styles.signupText} onPress={nextpage}>
          Detect Location
          </Text>
      </TouchableOpacity>
      
     </View>
     <View  style={styles.signupBtn2}>
      <TouchableOpacity>
                    <Text  style={styles.signupText2} onPress={nextpage}>
          Submit

          </Text>
      </TouchableOpacity>
  </View>
        </View>
         </View>
             </View>
       
       
    
            
    );
  }

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor:'#FFFFFF',
 },


header:{
fontWeight:'700',
fontSize:26, 
marginLeft:30,


},
  input: {
    width: 280,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderRadius: -50,
    borderColor: '#000',
    marginBottom: '1%',
    marginTop:13,
  },
  imglogo:{
    marginLeft:90,
    width:80,
    height:80,
    marginTop:-60,
  },
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
    borderColor: '#1B6C72',
    marginBottom: '1%',
    marginTop:13,
  },
   input8:{
    width: 100,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderRadius: -50,
    borderColor: '#1B6C72',
    marginBottom: '1%',
    marginTop:-47,
    marginLeft:190,
  },

  input12: {
    width: 280,
    height: 100,
    padding: 10,
    borderWidth: 1,
    borderRadius: -50,
    borderColor: '#1B6C72',
    marginBottom: '1%',
    marginTop:13,
  },

   signupText:{
    fontSize:18,
    color:'#fff',
    fontWeight:'600',
    textAlign:'center',
  

  },
signupText2:{
    fontSize:18,
    color:'#fff',
    fontWeight:'600',
    textAlign:'center',
 
},
signupBtn:{
width:240,
height:30,
backgroundColor:'#1B6C72E5',
justifyContent:'center',
marginLeft:'10%',
marginTop:4,
borderRadius:27,
margin:-5,

},
signupBtn2:{
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
