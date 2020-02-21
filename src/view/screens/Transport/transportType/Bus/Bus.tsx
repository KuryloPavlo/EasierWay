import React from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import { FirstStopIC, LastStopIC, WhiteBusIC } from '../../../../../assets/images';
import styles from './styles';

import { Props } from './@types';

import { BusList } from '../../../../../state/@types/BusList';

class Bus extends React.PureComponent<Props> {
    static navigationOptions = () => ({
        tabBarIcon: () => (
            <Image
                style = {{width: 24, height: 24}}
                source = {WhiteBusIC}
                resizeMode = 'center'
            />
        )
    })

    private renderBus = ({item} : {item: BusList}) => (
        <TouchableOpacity 
            style = {styles.container}
        >
            <View> 
                <Text style = {styles.titleText}>{item.number}</Text>
            </View>
            <View>
                <View style = {styles.stopContainer}>
                    <Image
                        style = { styles.ic}
                        source = { FirstStopIC }
                        resizeMode = 'center'
                    />
                    <Text style = {styles.text}>{item.firstStope}</Text>
                </View>
                <View style = {styles.stopContainer}>
                    <Image 
                        style = {styles.ic}
                        source = { LastStopIC }
                        resizeMode = 'center'
                    />
                    <Text style = {styles.text}>{item.lastStope}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )

    render(){
        return(
            <FlatList  
                data = {this.props.busList}
                renderItem = {this.renderBus}
            />
        )
    }
    
}

export default Bus;