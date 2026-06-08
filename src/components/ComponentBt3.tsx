import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const HelloWorldSquare = () => {
  return (
    <View style={styles.square}>
      <Text style={styles.text}>Hello, world</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  square: {
    width: 200,
    height: 200,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 18,
  },
});

export default HelloWorldSquare;