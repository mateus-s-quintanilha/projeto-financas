import React, { useContext, useState, useEffect } from 'react';
import { View, SafeAreaView, Text, TouchableOpacity, Keyboard, Alert } from 'react-native';
import Header from '../../components/Header';
import HistoricoList from '../../components/HistoricoList';
import { AuthContext } from '../../contexts/auth.context';

import { Background, Container, Nome, Saldo, Title, List } from './styles'

import firebase from '../../firebaseConnection'

export default function Home() {


    var { user } = useContext(AuthContext);

    var uid = user.uid;

    const [historico, setHistorico] = useState([]);

    const [saldo, setSaldo] = useState('0');


    useEffect(() => {
        async function loadList() {
            await firebase.database().ref('users').child(uid).on('value', (snapshot) => {
                setSaldo(snapshot.val().saldo)
            })

            await firebase.database().ref('historico').child(uid).limitToLast(10).on('value', (snapshot) => {
                setHistorico([])
                let list = []

                snapshot.forEach((itemList) => {
                    var data = {
                        key: itemList.key,
                        valor: itemList.val().valor,
                        tipo: itemList.val().tipo   
                    }
                    list.push(data)
                })

                setHistorico(list)
            })
        }

        loadList()
    }, [])

    async function handleDelete(data) {
        Keyboard.dismiss()
        let saldoAtual = parseFloat(saldo)
        await firebase.database().ref('historico').child(uid).child(data.key).remove().then(() => {

            data.tipo == 'despesa' ? saldoAtual += parseFloat(data.valor) : saldoAtual -= parseFloat(data.valor)
            firebase.database().ref('users').child(uid).child('saldo').set(saldoAtual)
        }).catch((err) => {
            Alert.alert(err.code)
        })
    }


 return (
    <Background>

        <SafeAreaView>
            <Header />
        </SafeAreaView>

        <Container>
            <Nome>{user && user.nome}</Nome>
            <Saldo>R$ {parseFloat(saldo).toFixed(2)}</Saldo>
        </Container>
        
        <Title>Últimas Movimentações</Title>
        <List showsVerticalScrollIndicator={false} data={historico} keyExtractor={(item) => item.key} renderItem={({ item }) => <HistoricoList data={item} onDelete={handleDelete} />} />
        

    </Background>
  );
}