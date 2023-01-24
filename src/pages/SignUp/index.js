import React, { useState, useContext } from 'react';
import { View, SafeAreaView, Text, Alert, Platform, Keyboard, ActivityIndicator } from 'react-native';

import { AuthContext } from '../../contexts/auth.context';

import { Background, Container, AreaInput, Input, SubmitButton, SubmitText } from '../Login/styles'

export default function Signup() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    const { signUp } = useContext(AuthContext)

    function handleSignUp() {
        if(email =='' || password == '' || name == '') {
            Alert.alert('Um ou mais campos em branco')
        } else {
            signUp(email, password, name)
            Keyboard.dismiss()
        }
    }

    return (
        <Background>
            <Container behavior={Platform.OS === 'ios' ? 'padding' : ''} enabled>

                <AreaInput>
                    <Input placeholder="Nome" value={name} onChangeText={(text) => setName(text)} />
                </AreaInput>

                <AreaInput>
                    <Input placeholder="E-mail" value={email} onChangeText={(text) => setEmail(text)} />
                </AreaInput>

                <AreaInput>
                    <Input secureTextEntry={true} placeholder="Senha" value={password} onChangeText={(text) => setPassword(text)} />
                </AreaInput>

                <SubmitButton onPress={handleSignUp}>
                    {authLoading ? (
                        <ActivityIndicator size={26} color="#fff" />
                     ) : (
                        <SubmitText>Cadastrar</SubmitText>
                    )}
                </SubmitButton>

            </Container>
        </Background>
    );
}