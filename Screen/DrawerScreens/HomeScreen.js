// Import React and Component
import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
 
const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 20,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            Tugas UTS
            {'\n\n'}
            This is the Home Screen
            {'\n\n'}
            Nama : Liu Purnomo
            {'\n\n'}
            NIM : 2010013
          </Text>
        </View>
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            color: 'grey',
          }}>
          Splash, Login and Home Page{'\n'}React Native
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            color: 'grey',
          }}>
          www.liupurnomo.com
        </Text>
      </View>
    </SafeAreaView>
  );
};
 
export default HomeScreen;
