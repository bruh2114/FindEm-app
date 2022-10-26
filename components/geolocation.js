import * as React from 'react';
import MapView, { Marker, Callout, Circle } from 'react-native-maps';
import { Text, View, StyleSheet, Image, Dimensions, Button, TouchableOpacity } from 'react-native';
import * as Location from 'expo-location';

export default function Geolocation() {
  const [pin, setPin] = React.useState({
    latitude: -28.715189523342314,
    longitude: 24.734669956526762,
  }) 


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



  React.useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      console.log(location); console.log(locations)
    })();
  }, []);
  return (
    <View style={styles.container}>

      <Text>Location</Text>
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
          draggable={true}
          onDragStart={(e) => {
            console.log('Drag Start', e.nativeEvent.coordinate);
          }}
          onDragEnd={(e) => {
            console.log('Drag End', e.nativeEvent.coordinate);

            setPin({
              latitude: e.nativeEvent.coordinate.latitude,
              longitude: e.nativeEvent.coordinate.longitude,
            });
          }}>
          <Callout>
            <Text>This is a Callout</Text>
          </Callout>
        </Marker>

   
  
        <Circle center={pin} radius={100} />

        <Marker coordinate={{latitude:-28.709436504015724, longitude:24.730719784318353}} title='Marker' />


      </MapView>
      
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
