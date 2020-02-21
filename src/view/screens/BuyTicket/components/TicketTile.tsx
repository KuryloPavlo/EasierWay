import React from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';

import styles from './styles';
import { MinusIC, PluseIC} from '../../../../assets/images';
import {Props} from './@types';

class TicketTile extends React.PureComponent<Props>{
    render(){
        const { name, amount, price, onPlusPress, onMinusPress} = this.props;

        return(
            <View style = {[styles.buyTicketContainer,
                amount === 0 ? { opacity: 0.4 } : null
            ]}>
                    <View style = {styles.textContainer}>
                        <Text style = {styles.text}>{name}</Text>
                    </View>
                    <View style = {styles.ticketContainer}>
                        <TouchableOpacity
                            onPress = {onMinusPress}
                        >
                            <Image
                                style = {styles.ic}
                                source = { MinusIC }
                                resizeMode = 'center'
                            />
                        </TouchableOpacity>
                        <Text style = {styles.meterText}>{amount}</Text>
                        <TouchableOpacity
                            onPress = {onPlusPress}
                        >
                            <Image
                                style = {styles.ic}
                                source = { PluseIC }
                                resizeMode = 'center'
                            />
                        </TouchableOpacity>
                    </View>
                    <View style = {styles.priceContainer}>
                        <Text style = {styles.priceText}>{price}</Text>
                        <Text style = {styles.currencyText}>UAH</Text>
                    </View>
                </View>
        )
    }
}

export default TicketTile;