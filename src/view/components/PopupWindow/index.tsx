import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import { TICKET } from '../../../navigation/Routes';

import styles from './styles'

class PopupWindow extends React.PureComponent {
    navigateToTicket = () => {
        this.props.navigation.navigate(TICKET);
    }

    render(){
        const {show, onClose} = this.props;
        return show ? (
            <View style = {styles.container}>
                <View style = {styles.popupContainer}>
                    <View style = {styles.textContainer}>
                        <Text style = {styles.titleText}>Payment</Text>
                        <Text style = {styles.text}>You will be charged 7.00 UAH  for the sigle ride ticket</Text>
                    </View>
                    <View style = {styles.buttonContainer}>
                        <TouchableOpacity
                            style = {styles.button}
                            onPress = {onClose}
                        >
                            <Text style = {styles.cancelText}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style = {styles.buttonYellow}
                            onPress = {this.navigateToTicket}
                        >
                            <Text style = {styles.whiteText}>Buy</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        ) : null;
    }
}

export default PopupWindow;