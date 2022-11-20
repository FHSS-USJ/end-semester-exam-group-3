// Import React
// import React from 'react';
import * as React from 'react';

// Import Navigators from React Navigation
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

// Import Screens
import HomeScreen from './DrawerScreens/HomeScreen';
import rating from './DrawerScreens/rating';
import Speech2Text from './DrawerScreens/Speech2Text';
import Text2Speech from './DrawerScreens/Text2Speech';
import AudioTherapyScreen from './DrawerScreens/AudioTherapyScreen';
import birdWatchers from './DrawerScreens/birdWatchers';
import GeoLocation from './DrawerScreens/GeoLocation';
import CustomSidebarMenu from './Components/CustomSidebarMenu';
import NavigationDrawerHeader from './Components/NavigationDrawerHeader';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Home', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#1F319D', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};

const Speech2TextScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="Speech2Text"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#1F319D', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="Speech2Text"
        component={Speech2Text}
        options={{
          title: 'Speech2Text', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};

const Text2SpeechScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="Text2Speech"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#1F319D', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="Text2Speech"
        component={Text2Speech}
        options={{
          title: 'Text2Speech', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};

const AudioTherapyScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="AudioTherapyScreen"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#1F319D', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="AudioTherapyScreen"
        component={AudioTherapyScreen}
        options={{
          title: 'AudioTherapyScreen', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};

const ratingScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="rating"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#1F319D', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="rating"
        component={rating}
        options={{
          title: 'rating', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};

const birdWatchersScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="birdWatchers">
      <Stack.Screen
        name="birdWatchers"
        component={birdWatchers}
        options={{
          title: 'Bird Identifier for BirdWatchers', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#1F319D', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};
const GeoLocationScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="GeoLocation">
      <Stack.Screen
        name="GeoLocation"
        component={GeoLocation}
        options={{
          title: 'GeoLocation for BirdWatchers', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#1F319D', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};

const DrawerNavigatorRoutes = props => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: '#cee1f2',
        color: '#cee1f2',
        itemStyle: {marginVertical: 5, color: 'white'},
        labelStyle: {
          color: '#d8d8d8',
        },
      }}
      screenOptions={{headerShown: false}}
      drawerContent={CustomSidebarMenu}>
      <Drawer.Screen
        name="HomeScreenStack"
        options={{drawerLabel: 'Home Screen'}}
        component={HomeScreenStack}
      />
      <Drawer.Screen
        name="Speech2TextScreenStack"
        options={{drawerLabel: 'Speech2Text'}}
        component={Speech2TextScreenStack}
      />
      <Drawer.Screen
        name="Text2SpeechScreenStack"
        options={{drawerLabel: 'Text2Speech'}}
        component={Text2SpeechScreenStack}
      />
      <Drawer.Screen
        name="AudioTherapyScreenStack"
        options={{drawerLabel: 'AudioTherapyScreen'}}
        component={AudioTherapyScreenStack}
      />
      <Drawer.Screen
        name="rating"
        options={{drawerLabel: 'Rate Us'}}
        component={ratingScreenStack}
      />
         <Drawer.Screen
        name="birdWatchersScreenStack"
        options={{drawerLabel: 'Bird Identifier for BirdWatchers'}}
        component={birdWatchersScreenStack}
      />
      <Drawer.Screen
        name="GeoLocationScreenStack"
        options={{drawerLabel: 'GeoLocation for BirdWatchers'}}
        component={GeoLocationScreenStack}
      />
      
    </Drawer.Navigator>
  );
};

export default DrawerNavigatorRoutes;
