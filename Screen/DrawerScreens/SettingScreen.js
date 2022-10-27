// Import React and Component
import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';

const SettingsScreen = () => {
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
            SoundCores - Sound Type Detection App
            {'\n\n'}
            Settings Screen
          </Text>
        </View>
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            color: 'grey',
          }}>
          Sound Type Recognition{'\n'}React Native
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            color: 'grey',
          }}>
          SoundCores v 1.0.0
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SettingsScreen;
