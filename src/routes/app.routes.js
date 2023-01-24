import React from 'react';
import { View } from 'react-native';



import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../pages/Home';
import Profile from '../pages/Profile';
import New from '../pages/New';
import DrawerContent from '../components/DrawerContent';

export default function AppRoutes() {
    const Drawer = createDrawerNavigator()
    return (
        <Drawer.Navigator 
        drawerContent={(props) => <DrawerContent {...props} />}
        screenOptions={{
            drawerStyle: {
                backgroundColor: '#171717',
            },
            drawerLabelStyle: {
                fontWeight: 'bold',
                fontSize: 18,
                padding: 6
            },
            drawerActiveTintColor: '#fff',
            drawerActiveBackgroundColor: '#00b94a',
            drawerInactiveBackgroundColor: '#000',
            drawerInactiveTintColor: '#ddd',
            drawerItemStyle: {
                marginVertical: 5
            },
            headerShown: false,
        }}>

            <Drawer.Screen name='Home' component={Home} />
            <Drawer.Screen name='Profile' component={Profile}  options={{title: 'Perfil'}}/>
            <Drawer.Screen name='Registrar' component={New} />

        </Drawer.Navigator>
  );
}