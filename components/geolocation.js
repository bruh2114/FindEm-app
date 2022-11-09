import React, {useState, useEffect} from 'react';
import MapView, { Marker, Callout, Circle } from 'react-native-maps';
import { Text, View, StyleSheet, Image, Dimensions, Button, TouchableOpacity, PermissionsAndroid } from 'react-native';
import * as Location from 'expo-location';

const requestLocationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Geolocation Permission',
        message: 'Can we access your location?',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    console.log('granted', granted);
    if (granted === 'granted') {
      console.log('You can use Geolocation');
      return true;
    } else {
      console.log('You cannot use Geolocation');
      return false;
    }
  } catch (err) {
    return false;
  }
}
export default function Geolocation() {
  const [pin, setPin] = React.useState({
    latitude: -28.715189523342314,
    longitude: 24.734669956526762,});
  const [location, setLocation] = useState(false);

  const [ locations, setLocations] = React.useState([

    {
      latitude:-28.709436504015724,
      longitude: 24.730719784318353,
    },

     {
      latitude:-28.709054270724355,
      longitude:24.723411698846586,
    }


  ])



  const getLocation = () => {
    const result = requestLocationPermission()
    .then(res => {
      console.log('res is:', res);
      if(res){
        Location.getCurrentPosition(
          position => {
            console.log(position);
            setLocation(position);
          },
          error => {
            console.log(error.code, error.message);
            setLocation(false);
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        )
      }
    })
    console.log(location);
  };
  return (
    <View style={styles.container}>

      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -28.715189523342314,
          longitude: 24.734669956526762,
          latitudeDelta: 0.005,
          longitudeDelta: 0.0005,
        }}
        showsUserLocation={true}
        onUserLocationChange={(e) => {
          console.log('onUserLocationChange', e.nativeEvent.coordinate);
        }}>
        <Marker
          coordinate={pin}
          title=""
          description=""
          pinColor="gold"
          
          onDragEnd={(e) => {
            console.log('Drag End', e.nativeEvent.coordinate);

            setPin({
              location: e.nativeEvent.coordinate.latitude,
              location: e.nativeEvent.coordinate.longitude,
            });
          }}>
          <Callout>
            <Text>This is a Callout</Text>
          </Callout>
        </Marker>

        

          
        <Circle center={pin} radius={100} />
      

      </MapView>

      <Button title="Get Location" onPress={getLocation}/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
