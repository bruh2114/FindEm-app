import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';
import { mdiNavigationVariantOutline } from '@mdi/js';

import { Card } from 'react-native-paper';

export default function Notification() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        RECENT POSTS
      </Text>
            <Image style={styles.logo} source={require('../assets/images/missing1.jpg')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});