import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import AssetExample from './AssetExample';
import Home from './Home';
import Add from './Add';
import Setting from './Settings';

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
          
        
        }}/>
      

      <Tab.Screen name="Add" component={Add} 

        options={{
          tabBarLabel: 'Add',
         
        }}/>
      
        <Tab.Screen name="Settings" component={Setting} 
      
        options={{
          tabBarLabel: 'Settings',
         
        }}/>

        

    </Tab.Navigator>
  );
}

export default BottomNav