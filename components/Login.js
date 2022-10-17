import React, { Component } from 'react';
import { Alert, Button, TextInput, View, StyleSheet,Text,TouchableOpacity } from 'react-native';
 import{Image} from 'react-native';


export default function Login ({navigation}){

const nextpage = () => {
  navigation.navigate('Signup')
}


   return (

      <View style={styles.container}>
      
     <View style={styles.container2}>
       
       <Image style={styles.logo} source={require("../assets/Caught_9remove.png")}/>
   

   <Text style={styles.welcome1}>Welcome...</Text>
   <Text style={styles.slogan}>Login to proceed</Text>
      <TouchableOpacity>
          
      </TouchableOpacity>

     
    <View style={styles.inputcontainer}>
       
        <TextInput
         
          placeholder={'Email'}
          secureTextEntry={true}
          style={styles.input}
        />
         <TextInput
         
         
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />
       
   
        <View  style={styles.loginBtn}>
        <TouchableOpacity>
          <Text  style={styles.loginText}>
          Log In
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
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#73A9AD',
    
  },

  container2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius:15,
    height:320,
    width:302,
    marginTop:50,
    
  },
    
   logo:{
   marginTop:'80%',
margin:200,
width:200,
borderRadius:50,

   },
welcome1:{
fontWeight:'700',
fontSize:26, 
color:'#1B6C72',
marginTop:-200,
},

slogan:{
  fontWeight:'bold',
fontSize:12, 
color:'#1B6C72',

},

  input: {
    width: 300,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: '#1B6C72',
    marginBottom: '1%',
    marginTop:50,
  },
 
  loginText:{
    fontSize:18,
    color:'#fff',
    fontWeight:'600',
    textAlign:'center',

  },

loginBtn:{
width:140,
height:45,
backgroundColor:'#1B6C72E5',
justifyContent:'center',
marginLeft:'30%',
marginTop:50,
borderRadius:27,

},

inputcontainer:{
    borderColor: '#fff',
    marginBottom: '100%',
    marginTop:15,
    
},

});

