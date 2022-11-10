import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/Login';
import Signup from './components/signup';
import Welcome from './components/welcome';
import Home from './components/Home';
import Geolocation from './components/geolocation';
import BottomNav from './components/bottomNav';
import Test from './components/test'
import Profile from './components/Profile';

const Stack = createStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator

      >



        <Stack.Screen
          name="welcome"
          component={Welcome}
          options={{ headerShown: false }}

        />
        <Stack.Screen
          name="Home"
          component={BottomNav}
          options={
            { title: 'tabs' }
          }
        />



        <Stack.Screen
          name="login"
          component={Login}
          options={{ headerShown: false }}

        />

        <Stack.Screen
          name="signUp"
          component={Signup}
          options={{ headerShown: false }}
        />


      

        <Stack.Screen
          name="Profile"
          component={Profile}
          options={
            { title: 'Profile' }
          }
        />

      </Stack.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
