import React from 'react';
import { View, Text, Image } from 'react-native';
import { WhiteTramIC } from '../../../../../assets/images';

class Tram extends React.PureComponent {
    render(){
        return(
            <View>
                <Text> Tram </Text>
            </View>
        )
    }
}

Tram.navigationOptions = {
    tabBarIcon: () => (
        <Image
            style = {{width: 24, height: 24}}
            source = {WhiteTramIC}
            resizeMode = 'center'
        />
    )
}

export default Tram;