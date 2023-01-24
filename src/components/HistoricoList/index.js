import React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';

import Icon from 'react-native-vector-icons/Feather'
import Header from '../Header';

import { Container, Tipo, TipoText, IconView, ValorText } from './styles'

export default function HistoricoList({ data, onDelete }) {
 return (
    <TouchableWithoutFeedback onLongPress={() => onDelete(data)}>
     <Container>

        <Tipo>
            <IconView tipo={data.tipo}>
                <Icon name={data.tipo == 'despesa' ? 'arrow-down' : 'arrow-up' } color="#fff" size={20} />
                <TipoText>{ data.tipo }</TipoText>
            </IconView>
        </Tipo>

        <ValorText>
                R$ {parseFloat(data.valor).toFixed(2)} 
        </ValorText>

     </Container>
    </TouchableWithoutFeedback>
  );
}