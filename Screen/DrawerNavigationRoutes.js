// Import React
// import React from 'react';
import * as React from 'react';

// Import Navigators from React Navigation
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

// Import Screens
import HomeScreen from './DrawerScreens/HomeScreen';
import Speech2Text from './DrawerScreens/Speech2Text';
import Text2Speech from './DrawerScreens/Text2Speech';
import AudioTherapyScreen from './DrawerScreens/AudioTherapyScreen';
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
    </Drawer.Navigator>
  );
};

export default DrawerNavigatorRoutes;
