import React from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import styles from './styles';
import { BlackBusIC, ArrowDownIC, GoldStarIC, WhiteAllIC } from '../../../../../assets/images';

import { Props } from './@types';

import { RouteList } from '../../../../../state/@types/RouteList';

import {SELECTED_TRANSPORT} from '../../../../../navigation/Routes';

class All extends React.PureComponent<Props> {
    navigationToSelectedTransport = () => {
        this.props.navigation.navigate(SELECTED_TRANSPORT)
    }

    private renderAll = ({item, index} : {item: RouteList, index: number}) => (
        <TouchableOpacity
            style = {styles.container}
            onPress = {this.navigationToSelectedTransport}
        >
            <View style = {styles.departureContainer}>
                <Text style = {styles.smallText}>Departure on</Text>
                <View style = {{flexDirection: 'row', alignItems: 'flex-end', marginTop: 8}}>
                    <Text style = {styles.bigText}>{item.time}</Text>
                    <Text style = {styles.minText}>min</Text>
                </View>
            </View>
            <View style = {styles.inWayConteiner}>
                <View style = {{flexDirection: 'row',  alignItems: 'flex-end'}}>
                    <Text style = {styles.smallText}>In way: </Text>
                    <Text style = {styles.smallText}>{item.inWay}</Text>
                    <Text style = {styles.smallText}>min</Text>
                </View>
                <View style = {{marginTop: 28, flexDirection: 'row', alignItems: 'center'}}>
                    <Image
                        style = {styles.icBus}
                        source = { BlackBusIC }
                        resizeMode = 'center'
                    />
                    <View style = {styles.busContainer}>
                        <Text style = {styles.smallText}>{item.bus}</Text>
                    </View>
                </View>
                <View style = {{marginTop: 10, marginBottom: 6, flexDirection: 'row', alignItems: 'center'}}>
                    <Text style = {styles.smallText}>Show details</Text>
                    <Image 
                        style = {styles.icArrow}
                        source = { ArrowDownIC }
                        resizeMode = 'center'
                    />
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
        </TouchableOpacity>
    )

    render(){
        return(
            <FlatList
                data = {this.props.routeList}
                renderItem = {this.renderAll}
            />
        )
    }
}
All.navigationOptions = {
    tabBarIcon: () => (
        <Image 
            style = {{width: 24, height: 24}}
            source = {WhiteAllIC}
            resizeMode = 'center'
        />
    )
}

export default All;