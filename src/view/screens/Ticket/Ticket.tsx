import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';
import { StudentCapIC, BusIC, LogoIC } from '../../../assets/images';

import { MAIN } from '../../../navigation/Routes';

class Ticket extends React.PureComponent{
    navigateToMap = () => {
        this.props.navigation.navigate(MAIN)
    }

    render(){
        return(
            <View style = {{flex: 1}}>
                <View style = {styles.container}>
                    <View style = {styles.ticketContainer}>
                        <Text>Single Student</Text>
                        <Image 
                            style = {styles.icCap}
                            source = {StudentCapIC}
                            resizeMode = 'center'
                        />
                    </View>
                    <Image
                        style = {styles.ic}
                        source = {BusIC}
                        resizeMode = 'cover'
                    />
                </View>
                <View style = {styles.minContainer}></View>
                <View style = {styles.secondContainer}>
                    <Image
                        style = {styles.logo}
                        source = {LogoIC}
                        resizeMode = 'cover'
                    />
                    <View style = {styles.priceContainer}>
                        <Text style = {styles.text}>1 x </Text>
                        <Text style = {styles.boldText}>7.00</Text>
                        <Text style = {styles.text}>UAH</Text>
                    </View>
                    <Text style = {styles.oppacityText}>Swipe down to validate</Text>
                </View>
                <TouchableOpacity 
                    style = {styles.buttContainer}
                    onPress = {this.navigateToMap}    
                >
                    <Text style = {styles.textWhite}>MAP</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Ticket;