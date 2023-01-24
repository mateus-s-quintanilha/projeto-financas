import styled from 'styled-components/native'


export const Background = styled.View`
    flex: 1;
    background-color: #131313;
`


// -> 'KeyboardAvoidingView' é um comportamento que faz com que o teclado não fique por cima do input
export const Container = styled.KeyboardAvoidingView`
    flex: 1;
    align-items: center;
    justify-content: center;
`


export const Logo = styled.Image`  
    margin-bottom: 32px;
`

export const AreaInput = styled.View`  
    flex-direction: row;
`

export const Input = styled.TextInput.attrs({
    placeholderTextColor: 'rgba(255,255,255,0.40)'})
    `
    background: rgba(0,0,0,0.99);
    width: 90%;
    font-size: 17px;
    color: #fff;
    margin-bottom: 20px;
    padding: 12px;
    border-radius: 8px;
    height: 60px
`

export const SubmitButton = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    background-color: #00b94a;
    width: 90%;
    height: 60px;
    border-radius: 8px;
    margin-top: 10px;
`

export const SubmitText = styled.Text`
    font-size: 20px;
    color: #131313;
    font-weight: bold;
`


export const Link = styled.TouchableOpacity`
    margin-top: 16px;
    margin-bottom: 9px;
`

export const LinkText = styled.Text`
    color: #fff;
    font-size: 16px;
`