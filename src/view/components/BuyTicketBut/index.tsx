import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { TicketIC } from '../../../assets/images';
import styles from './styles';
import { BUY_TICKET } from '../../../navigation/Routes';

class BuyTicketBut extends React.PureComponent{
    navigateToBuyTicket = () => {
        this.props.navigation.navigate(BUY_TICKET);
    }
    
    render(){
        return(
            <TouchableOpacity 
                style = {styles.container}
                onPress = {this.navigateToBuyTicket}
            >
                <Image
                    style = {styles.ic}
                    source = { TicketIC }
                />
            </TouchableOpacity>
        )
    }
    
}

export { BuyTicketBut };