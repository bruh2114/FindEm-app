import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from './Home';
import Add from './Add';
import Geolocation from './geolocation';
import Profile from './Profile';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Tab = createMaterialBottomTabNavigator();

function BottomNav() {
  return (
    <Tab.Navigator 
      barStyle={{ backgroundColor: 'white' }}
   
>
      <Tab.Screen name="Home" component={Home} 
      
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          )
        
        }}/>
      

      <Tab.Screen name="Add" component={Add} 

        options={{
          tabBarLabel: 'Add',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="plus" color={color} size={26} />
          ),
        }}/>
      
        <Tab.Screen name="Geolocation" component={Geolocation} 
      
        options={{
          tabBarLabel: 'Geolocation',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cog-outline" color={color} size={26} />
          ),
        }}/>

        

    </Tab.Navigator>
  );
}

export default BottomNav

