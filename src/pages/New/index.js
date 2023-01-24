import React, { useState, useContext } from 'react';
import { View, SafeAreaView, Text, Keyboard, TouchableWithoutFeedback, Alert } from 'react-native';
import Header from '../../components/Header';

import {Picker} from '@react-native-picker/picker';

import { Background, InputArea, Input, SubmitButton, SubmitButtonText, ButtonArea } from './styles'

import { AuthContext } from '../../contexts/auth.context';

import firebase from '../../firebaseConnection'
import { useNavigation } from '@react-navigation/native';


export default function New() {

  const [valor, setValor] = useState('')
  const [tipo, setTipo] = useState(null)

  const { user } = useContext(AuthContext)

  const navigation = useNavigation()


  async function handleAdd() {
    let uid = user.uid

    let key = firebase.database().ref('historico').child(uid).push().key

    await firebase.database().ref('historico').child(uid).child(key).set({
      tipo: tipo,
      valor: valor
      // date: new Date
    })

    await firebase.database().ref('users').child(uid).once('value').then((snapshot) => {
      let saldo = parseFloat(snapshot.val().saldo)

      tipo == 'despesa' ? saldo -= parseFloat(valor) : saldo += parseFloat(valor)


      firebase.database().ref('users').child(uid).child('saldo').set(saldo)
    })

    Keyboard.dismiss()
    setValor('')
    navigation.navigate('Home')

  }

  function handleSubmit() {
    Keyboard.dismiss()
    if(isNaN(parseFloat(valor)) || tipo == null) {
      Alert.alert('Preencha todos os campos corretamente')
      return
    }

    Alert.alert(
      'Confirmando dados',
      `Tipo: ${tipo} - valor: ${parseFloat(valor)}`,
      [
        {
          text: 'Cancelar',
          style: 'cancel'
        },
        {
          text: 'Continuar',
          onPress: handleAdd
        }
      ]
    )
  }


  return (
      // Esse "TouchableWithoutFeedback" é para que, quando o usuário estiver digitando no input e quiser sair do Keyboard, ele aperte na tela e o Keyboard saia.
    <Background onPress={() => Keyboard.dismiss()}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <SafeAreaView>
          <Header />

          <InputArea>
            <Input placeholder="Valor desejado" keyboardType="numeric" returnKeyType="next" onSubmitEditing={() => Keyboard.dismiss()} value={valor} onChangeText={(text) => setValor(text) } />
          </InputArea>

          <Picker
            selectedValue={tipo}
            onValueChange={(type) => setTipo(type)}
          >
            <Picker.Item label="Receita" color="white" value="receita" />
            <Picker.Item label="Despesa" color="white" value="despesa" />
          </Picker>

          <ButtonArea>
            <SubmitButton onPress={handleSubmit}>
              <SubmitButtonText>Cadastrar</SubmitButtonText>
            </SubmitButton>
          </ButtonArea>

        </SafeAreaView>
    </TouchableWithoutFeedback>
    </Background>
  );
}