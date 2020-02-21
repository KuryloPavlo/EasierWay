import React from 'react';
import { View, Text, Image } from 'react-native';
import { WhiteTrolleyIC } from '../../../../../assets/images';

class Trolley extends React.PureComponent {
    render(){
        return(
            <View>
                <Text> Trolley </Text>
            </View>
        )
    }
}
Trolley.navigationOptions = {
    tabBarIcon: () => (
        <Image
            style = {{width: 24, height: 24}}
            source = {WhiteTrolleyIC}
            resizeMode = 'center'
        />
    )
}

export default Trolley;