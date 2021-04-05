import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const MovieDetail = () => {
  return (
    <View style={styles.container}>
      <Text>MovieDetail</Text>
    </View>
  );
};

export default MovieDetail;
