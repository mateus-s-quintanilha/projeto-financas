import React, { useState, useContext } from 'react';
import { View, SafeAreaView, Text, TouchableOpacity, Alert, Platform, Keyboard, ActivityIndicator } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { AuthContext } from '../../contexts/auth.context'

import { Background, Container, AreaInput, Input, Link, LinkText, Logo, SubmitButton, SubmitText } from './styles'

export default function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigation()

  const { signIn, authLoading } = useContext(AuthContext)

  function handleLogin() {
    if(email == '' || password == '') {
      Alert.alert('Um ou mais campos vazios')
    } else {
      signIn(email, password)
      Keyboard.dismiss()
    }
  }


  return (
    <Background>
      {/* Isso significa que, se a plataforma for ios, o <Container> dará um padding quando o input for aberto, evitando que o mesmo seja coberto pelo keyboard */}
      <Container behavior={Platform.OS === 'ios' ? 'padding' : ''} enabled>
        <Logo source={require('../../assets/Logo.png')} />

        <AreaInput>
          <Input placeholder="E-mail" value={email} onChangeText={(text) => setEmail(text)} />
        </AreaInput>

        <AreaInput>
          <Input secureTextEntry={true} placeholder="Senha" value={password} onChangeText={(text) => setPassword(text)} autoCapitalize="none" />
        </AreaInput>

        <SubmitButton onPress={handleLogin}>
        {authLoading ? (
            <ActivityIndicator size={26} color="#fff" />
          ) : (
            <SubmitText>Acessar</SubmitText>
          )}
        </SubmitButton>

        <Link onPress={() => navigation.navigate('SignUp')}>
          <LinkText>Criar uma conta!</LinkText>
        </Link>
      </Container>
    </Background>
  );
}