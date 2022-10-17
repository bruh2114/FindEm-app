import React, { Component } from 'react';
import { Alert, Button, TextInput, View, StyleSheet,Text,TouchableOpacity } from 'react-native';
 import{Image} from 'react-native';


export default function Welcome ({navigation}){

const nextpage = () => {
  navigation.navigate('Signup')
}


   return (
     
      <View style={styles.container}>
     <View style={styles.container2}>
  
       <Image style={styles.logo} source={require("../assets/Caught_9remove.png")}/>
          <Text style={styles.welcome1}>Welcome To</Text>

      <TouchableOpacity>
     
      </TouchableOpacity>
       <View style={styles.inputcontainer}>
       
           </View>
            <View  style={styles.welcomeBtn}>
        <TouchableOpacity>
          <Text  style={styles.welcomeText} onPress={nextpage}>
          Get started
          </Text>
      </TouchableOpacity>
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
    width:320,
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
marginTop:-500,

},

  welcomeText:{
    fontSize:18,
    color:'#fff',
    fontWeight:'600',
    textAlign:'center',


  },

welcomeBtn:{
width:140,
height:45,
backgroundColor:'#1B6C72E5',
justifyContent:'center',
marginLeft:'10%',
marginTop:50,
borderRadius:27,

},

inputcontainer:{
    borderColor: '#fff',
    marginBottom: '100%',
   marginTop:15,

}
});



  

