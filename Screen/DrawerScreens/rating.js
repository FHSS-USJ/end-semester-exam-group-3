import React, { useState } from 'react';
import { TextInput,ScrollView,Animated,TouchableWithoutFeedback,Text,StyleSheet,View,SafeAreaView,TouchableOpacity,ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function AboutApp() {
  const [starRating, setStarRating] = useState(null);

  const animatedButtonScale = new Animated.Value(1);

  const handlePressIn = () => {
    Animated.spring(animatedButtonScale, {
      toValue: 1.5,
      useNativeDriver: true,
      speed: 50,
      bounciness: 4
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(animatedButtonScale, {
      toValue: 1,
      useNativeDriver: true,
      speed: 50,
      bounciness: 4,
    }).start();
  };

  const animatedScaleStyle = {
    transform: [{ scale: animatedButtonScale }],
  };

  return (
      
      <View style={styles.container}>
        <ImageBackground
            style={styles.defaultBg}
            resizeMode={'stretch'}
           
          />
        
         <ScrollView>
        <View style={{backgroundColor:'#f7f7f7'}}>
        <Text style={styles.heading}>{starRating ? `${starRating}` : 'Please Rate Us'}</Text>
        <View style={styles.stars}>
        <TouchableWithoutFeedback
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            onPress={() => setStarRating(1)}
          >
            <Animated.View style={animatedScaleStyle}>            
              <Icon
                name={starRating >= 1 ? 'star' : 'star-outline'}
                size={32}
                style={starRating >= 1 ? styles.starSelected : styles.starUnselected}
              />
            </Animated.View>
          </TouchableWithoutFeedback >
          <TouchableWithoutFeedback
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            onPress={() => setStarRating(2)}
          >
            <Animated.View style={animatedScaleStyle}>
              <Icon
                name={starRating >= 2 ? 'star' : 'star-outline'}
                size={32}
                style={starRating >= 2 ? styles.starSelected : styles.starUnselected}
              />
            </Animated.View>
          </TouchableWithoutFeedback >
          <TouchableWithoutFeedback
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            onPress={() => setStarRating(3)}
          >
            <Animated.View style={animatedScaleStyle}>
              <Icon
                name={starRating >= 3 ? 'star' : 'star-outline'}
                size={32}
                style={starRating >= 3 ? styles.starSelected : styles.starUnselected}
              />
            </Animated.View>
          </TouchableWithoutFeedback >
          <TouchableWithoutFeedback
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            onPress={() => setStarRating(4)}
          >
            <Animated.View style={animatedScaleStyle}>
              <Icon
                name={starRating >= 4 ? 'star' : 'star-outline'}
                size={32}
                style={starRating >= 4 ? styles.starSelected : styles.starUnselected}
              />
            </Animated.View>
          </TouchableWithoutFeedback >
          <TouchableWithoutFeedback
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            onPress={() => setStarRating(5)}
          >
            <Animated.View style={animatedScaleStyle}>
            <Icon
              name={starRating >= 5 ? 'star' : 'star-outline'}
              size={32}
              style={starRating >= 5 ? styles.starSelected : styles.starUnselected}
            />
            </Animated.View>
          </TouchableWithoutFeedback >
        </View>
       
        
        <TouchableOpacity style={styles.defaultButton}>
          
            <Text
              style={styles.button}>
             
            Submit 
            
            </Text>
          </TouchableOpacity>
        
        </View>
      </ScrollView>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'flex-start',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop:1,
    color:'',
    alignSelf: 'center',
  },
  stars: {
    display: 'flex',
    flexDirection: 'row',
    marginTop:-10,
    alignSelf: 'center',
  },
  starUnselected: {
    color: '#aaa',
  },
  starSelected: {
    color: '',
  },
  
  defaultBg: {
    width: '100%',
    height: 220,
    resizeMode: 'cover',
  },


  defaultButton:{
    padding: 15,
    backgroundColor: '#1F319D',
    borderRadius: 10,
    marginBottom:20,
    fontSize: 20,
    
  
    marginLeft:10,
    marginRight:10
  },
  button:{
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
    
  }
});