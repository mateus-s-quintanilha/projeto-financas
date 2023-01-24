import 'react-native-gesture-handler'
import React from 'react';
import { View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/pages/Home';
import Login from './src/pages/Login';

import { createDrawerNavigator } from '@react-navigation/drawer';
import Routes from './src/routes';

import AuthProvider from './src/contexts/auth.context';

// const Stack = createNativeStackNavigator()

const Drawer = createDrawerNavigator()

export default function App() {
 return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider>

    </NavigationContainer>
  );
}