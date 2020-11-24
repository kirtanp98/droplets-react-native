import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import BucketsListView from './components/BucketsListView';

export default function App() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <BucketsListView></BucketsListView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  safe: {
    flex: 1
  }
});
