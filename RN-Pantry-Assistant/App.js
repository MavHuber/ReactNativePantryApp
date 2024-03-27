import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import MainContainer from "./navigation/MainContainer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const App = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <MainContainer/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#FAFAFA',
    flex: 1,
  },
  container: {
    flex: 1,
    //backgroundColor: '#90E4C1',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    color: 'black',
    fontSize: 48,
  }
})

export default App;