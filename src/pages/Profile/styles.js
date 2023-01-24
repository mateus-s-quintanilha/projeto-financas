import styled from 'styled-components/native'


export const Background = styled.View`
    flex: 1;
    background-color: #131313;
    /* align-items: center;
    justify-content: center; */
`


export const Container = styled.View`
    /* width: 100%; */
    margin-top: 36px;
    align-items: center;
    justify-content: center;
`


export const Nome = styled.Text`
    font-size: 36px;
    font-weight: bold;
    text-align: center;
    color: #fff;
    margin-bottom: 32px;
`

export const NavigateButton = styled.TouchableOpacity`
    margin-top: 16px;
    width: 90%;
    height: 60px;
    background-color: #049301;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
`

export const LogOutButton = styled.TouchableOpacity`
margin-top: 16px;
    width: 90%;
    height: 60px;
    background-color: #C62c36;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
`


export const ButtonText = styled.Text`
    font-size: 18px;
    color: #fff;
    font-weight: bold;
`