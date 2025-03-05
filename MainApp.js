import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MainApp = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to Doctor Hunt!</Text>
      {/* Your main app content goes here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MainApp;
