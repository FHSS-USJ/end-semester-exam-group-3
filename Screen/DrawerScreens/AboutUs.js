import {
    Linking,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
    ScrollView,
  } from 'react-native';
  import React from 'react';
  
  const App = () => {
    return (
      <ScrollView>
        <View style={styles.aboutContainer}>
          <View style={styles.aboutLayout}>
            <Text style={[styles.paraStyle, styles.aboutPara]}>
              SoundCores is a great, easy to use and an extremely useful
              application for your android phone. If you want to detect the sounds
              around your phone, just trigger the application and it will
              immediately tell you the sound in your surroundings.
            </Text>
          </View>
          <Text style={styles.MainTitle}> About Developers </Text>
          <Text style={styles.mainHeader}>
            Bsc.Hons in Information and Communication Technology{' '}
          </Text>
          <Text style={styles.paraStyle}>
            {' '}
            University of Sri Jayawardenapura{' '}
          </Text>