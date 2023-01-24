import React, { useContext } from 'react';
import { View, Text, Image } from 'react-native';

import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer'

import { AuthContext } from '../../contexts/auth.context';

export default function DrawerContent(props) {

    const { user, signOut } = useContext(AuthContext)

    return (
        <DrawerContentScrollView>
            <View style={{marginTop: 25, alignItems: 'center'}}>

                <Image resizeMode='contain' source={require('../../assets/Logo.png')} style={{width: 90, height: 90}} />

                <Text style={{color: '#fff', fontSize: 20, marginTop: 12}}>Bem Vindo!</Text>
                <Text style={{color: '#fff', fontSize: 18, fontWeight: 'bold', marginTop: 12, marginBottom: 22}}>{ user && user.nome }</Text>

            </View>
            <DrawerItemList {...props} />
            {/* <DrawerItem {...props} label='Sair do App' inactiveBackgroundColor='#c62c36' /> */}
        </DrawerContentScrollView>
  );
}