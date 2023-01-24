import React from 'react';
import { View } from 'react-native';



import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../pages/Login';
import Signup from '../pages/SignUp';

const AuthStack = createNativeStackNavigator()

export default function AuthRoutes() {

 return (
    <AuthStack.Navigator>

        <AuthStack.Screen name='Login' component={Login} options={{
          headerShown: false
        }} />
        <AuthStack.Screen name='SignUp' component={Signup} options={{
          headerStyle: {
            backgroundColor: '#131313',
            borderBottomWidth: 1,
            borderBottomColor: '#00b94a'
          },
          headerTintColor: '#fff',
          headerBackTitleVisible: false,
          headerTitle: "Voltar"
        }} />

    </AuthStack.Navigator>
  );
}