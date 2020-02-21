import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import { BackArrowIC, FiltIC, BusIC } from '../../../assets/images';
import { MAIN } from '../../../navigation/Routes';
import NavigatorTab from './components/NavigationTabs';

class PublicTransport extends React.PureComponent{
    static navigationOptions = () => ({
        drawerLabel: 'Transport',
        drawerIcon: () => (
            <Image 
                style = {{width: 20, height: 20}}
                source = { BusIC }
                resizeMode = 'center'
            />
        ),
    });

    navigateBack = () => {
        this.props.navigation.goBack();
    }

    render(){
        return(
            <View style = {{flex: 1}}>
                <View style = {styles.container}>
                    <TouchableOpacity
                        onPress = {this.navigateBack}
                    >
                        <Image
                            style = {styles.ic}
                            source = { BackArrowIC }
                            resizeMode = 'center'
                        />
                    </TouchableOpacity>
                    <Text style = {styles.titleText}>
                        Public Transport
                    </Text>
                    <TouchableOpacity>
                        <Image
                            style = { styles.ic }
                            source = { FiltIC }
                            resizeMode = 'center'
                        />
                    </TouchableOpacity>
                </View>
                <NavigatorTab/>
            </View>
        )
    }
}

export default PublicTransport;