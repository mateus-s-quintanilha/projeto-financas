import React, {createContext, useState, useEffect} from 'react';
import { Alert, View } from 'react-native';

import firebase from '../firebaseConnection'

import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({})




export default function AuthProvider({ children }) {

  const [user, setUser] = useState(null)
  const [authLoading, setAuthLoading] = useState(false)

  useEffect(() => {
    setAuthLoading(true)
    async function getDataOnAsyncStorage() {
      let item = await AsyncStorage.getItem('Auth_user')

      if(item) {
        setUser(JSON.parse(item))
        setAuthLoading(false)
      }
    }

    getDataOnAsyncStorage()
}, [])


  async function storageUser(data) {
    await AsyncStorage.setItem('Auth_user', JSON.stringify(data))
  }


  function signUp(email, password, name) {
    setAuthLoading(true)

    firebase.auth().createUserWithEmailAndPassword(email, password).then(async (value) => {
      var uid = value.user.uid
      await firebase.database().ref('users').child(uid).set({
        saldo: 0,
        nome: name 
      }).then(() => {
        var data = {
          uid: uid,
          email: value.user.email,
          nome: name
        }

        setUser(data)
        storageUser(data)
        setAuthLoading(false)
      })

    }).catch((err) => {
      Alert.alert(err.code)
      setAuthLoading(false)
    })
  }


  function signIn(email, password) {
    setAuthLoading(true)
    
    firebase.auth().signInWithEmailAndPassword(email, password).then(async (value) => {
      var uid = value.user.uid
      await firebase.database().ref('users').child(uid).once('value').then((snapshot) => {
        var data = {
          uid: uid,
          email: value.user.email,
          nome: snapshot.val().nome
        }

        setUser(data)
        storageUser(data)
        setAuthLoading(false)
      })
    }).catch((err) => {
      Alert.alert(err.code)
      setAuthLoading(false)
    })
  } 

  async function signOut() {
    await firebase.auth().signOut()
    await AsyncStorage.clear().then(() => {
      setUser(null)
    })
  }


 return (
   <AuthContext.Provider value={{signed: !!user, user, signIn, signUp, signOut, authLoading}} >
     { children }
   </AuthContext.Provider>
  );
}