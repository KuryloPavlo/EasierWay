import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';
import {BlackBusIC, GoldStarIC} from '../../../../../assets/images';

class TicketContainer extends React.PureComponent {
    render(){
        return(
            <View style = {styles.container}>
                    <View style = {styles.departureContainer}>
                        <Text style = {styles.smallText}>Departure on</Text>
                        <View style = {{flexDirection: 'row', alignItems: 'flex-end', marginTop: 8}}>
                            <Text style = {styles.bigText}>15</Text>
                            <Text style = {styles.minText}>min</Text>
                        </View>
                    </View>
                    <View style = {styles.inWayConteiner}>
                        <View style = {{flexDirection: 'row',  alignItems: 'flex-end'}}>
                            <Text style = {styles.smallText}>In way: </Text>
                            <Text style = {styles.smallText}>31</Text>
                            <Text style = {styles.smallText}>min</Text>
                        </View>
                        <View style = {{marginTop: 28, flexDirection: 'row', alignItems: 'center'}}>
                            <Image
                                style = {styles.icBus}
                                source = { BlackBusIC }
                                resizeMode = 'center'
                            />
                            <View style = {styles.busContainer}>
                                <Text style = {styles.smallText}>21</Text>
                            </View>
                        </View>
                    </View>
                    <Image 
                        style = {styles.icStar}
                        source = { GoldStarIC }
                        resizeMode = 'center'
                    />
                    <View style = {styles.priceContainer}>
                        <Text style = {styles.whiteText}>Regular</Text>
                        <Text style = {styles.priceTextBig}>7</Text>
                        <Text style = {styles.priceTextSmall}>UAH</Text>
                    </View>
                </View>
        )
    }
}

export default TicketContainer;