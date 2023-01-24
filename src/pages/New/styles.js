import styled from 'styled-components';

export const Background = styled.View`
    flex: 1;
    background-color: #131313;
`

export const InputArea = styled.View`
    margin-top: 32px;
    width: 100%;
    align-items: center;
`
export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#222'
})`
    height: 50px;
    width: 90%;
    background-color: rgba(255, 255, 255, 0.9);
    font-size: 16px;
    padding: 10px;
    border-radius: 6px;
`

export const ButtonArea = styled.View`
    margin-top: 28px;
    width: 100%;
    align-items: center;
`
export const SubmitButton = styled.TouchableOpacity`
    height: 50px;
    width: 90%;
    background-color: #00b94a;
    justify-content: center;
    align-items: center;
`

export const SubmitButtonText = styled.Text`
    color: #131313;
    font-weight: bold;
    font-size: 22px;
`