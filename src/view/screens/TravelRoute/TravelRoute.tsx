import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import { WhiteStarIC, BackArrowIC, FiltIC, FirstStopIC, LastStopIC, VectorIC } from '../../../assets/images';

import styles from './styles';
import NavigatorTab from './components/NavigationTabs';

import {SELECTED_TRANSPORT} from '../../../navigation/Routes';

class TravelRoute extends React.PureComponent{
    navigateBack = () => {
        this.props.navigation.goBack();
    }

    render(){
        return(
            <View style = {{flex: 1}}>
                <View style = {styles.upperContainer}>
                    <TouchableOpacity
                        onPress = {this.navigateBack}
                    >
                        <Image 
                            style = { styles.ic }
                            source = { BackArrowIC }
                            resizeMode = 'center'
                        />
                    </TouchableOpacity>
                    <View style = {{flexDirection: 'row'}}>
                        <Image
                            style = { styles.ic }
                            source = { FiltIC }
                            resizeMode = 'center'
                        />
                        <Image
                            style = { styles.ic }
                            source = { WhiteStarIC }
                            resizeMode = 'center'
                        />
                    </View>
                </View>
                <View style = {styles.lowerContainer}>
                    <View>
                        <View style = {{flexDirection: 'row'}}>
                            <Image
                                style = { styles.ic }
                                source = { FirstStopIC}
                                resizeMode = 'center'
                            />
                            <Text style = {{color: '#FFFFFF'}}>
                                23 Hnata Hotkevycha str.    
                            </Text> 
                        </View>
                        <View style = {{flexDirection: 'row'}}>
                            <Image
                                style = { styles.ic }
                                source = { LastStopIC }
                                resizeMode = 'center'
                            />
                            <Text style = {{color: '#FFFFFF'}}>7 Pid Dubom str.</Text>
                        </View>
                    </View>
                    <Image 
                        style = { styles.ic }
                        source = { VectorIC }
                        resizeMode = 'center'
                    />
                </View>
                <NavigatorTab
                />
            </View>
        )
    }
}

export default TravelRoute;