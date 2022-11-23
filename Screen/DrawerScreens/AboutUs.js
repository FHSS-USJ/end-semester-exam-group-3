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
          <View style={styles.Images}>
          <Image
            style={styles.imgStyle}
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/en/1/1f/University_of_Sri_Jayewardenepura_crest.png',
            }}
          />
        </View>

        <View style={styles.aboutLayout}>
          <Text style={[styles.paraStyle, styles.aboutPara]}>
            We are undergraduates in Bsc.hons in ict from University of Sri
            Jayawardenepura. Our vision is to develop very useful software for
            the entire society.
          </Text>
        </View>

        <Text style={styles.mainHeader}> Follow Us </Text>

        <View style={styles.menuContainer}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() =>
              Linking.openURL('https://www.instagram.com/universitysjp/')
            }>
            <Image
              style={styles.iconStyle}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/2111/2111463.png',
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => Linking.openURL('https://www.facebook.com/unisjp')}>
            <Image
              style={styles.iconStyle}
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/768px-Facebook_Logo_%282019%29.png',
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() =>
              Linking.openURL(
                'https://www.linkedin.com/school/university-of-sri-jayewardenepura/',
              )
            }>
            <Image
              style={styles.iconStyle}
              source={{
                uri: 'https://seeklogo.com/images/L/linkedin-icon-logo-05B2880899-seeklogo.com.png',
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text style={styles.bottom}>SoundCores v 1.0.0</Text>
      </View>
    </ScrollView>
  );
};
