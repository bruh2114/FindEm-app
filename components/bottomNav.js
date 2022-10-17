import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import AssetExample from './AssetExample';
import Home from './Home';
import Add from './Add';
import Setting from './Settings';
import Navigation from './Navigation';
import { mdiNavigationVariantOutline } from '@mdi/js';
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
          ),
        }}/>
      <Tab.Screen name="Notifications" component={AssetExample} 

       options={{
          tabBarLabel: 'Notifications',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}/>

      <Tab.Screen name="Add" component={Add} 

        options={{
          tabBarLabel: 'Add',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="plus" color={color} size={26} />
          ),
        }}/>
      
        <Tab.Screen name="Settings" component={Setting} 
      
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cog-outline" color={color} size={26} />
          ),
        }}/>

        <Tab.Screen name="Navigation" component={Navigation} 
  
        options={{
          tabBarLabel: 'Navigation',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="arrow-compass" color={color} size={26} />
          ),
        }}/>

    </Tab.Navigator>
  );
}

export default BottomNav