import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import components from '../components';

const { ActivitiesList } = components;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
  },
});

export const ActivitiesScreen = () => (
  <View style={styles.container}>
    <ActivitiesList />
  </View>
);
