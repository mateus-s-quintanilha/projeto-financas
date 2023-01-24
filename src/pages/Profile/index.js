import React, { useContext } from 'react';
import { Alert, SafeAreaView, Text } from 'react-native';

import { Background, Container, Nome, NavigateButton, LogOutButton, ButtonText } from './styles'

import { AuthContext } from '../../contexts/auth.context';
import Header from '../../components/Header';
import { useNavigation } from '@react-navigation/native';


export default function Profile() {

  const { user, signOut } = useContext(AuthContext)

  const navigation = useNavigation()

  function handleLogOut() {
    Alert.alert('Usuário deslogado')
    signOut()
  }

  return (
    <Background>

      <SafeAreaView>
        <Header />
      </SafeAreaView>

      <Container>

        <Nome>{ user ? user.nome : ''}</Nome>
        <NavigateButton onPress={() => navigation.navigate('New')}>
          <ButtonText>Registrar gastos</ButtonText>
        </NavigateButton>

        <LogOutButton onPress={handleLogOut}>
          <ButtonText>Sair</ButtonText>
        </LogOutButton>

      </Container>


    </Background>
  );
}