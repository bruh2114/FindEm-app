import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';


import { Card } from 'react-native-paper';

export default function Settings() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        RECENT POSTS
      </Text>
           
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});