import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { LogoContainer } from '../../../components';
import styles from './styles';
import { SING_UP_3 } from '../../../../navigation/Routes';


class SingUp2 extends React.PureComponent {
    navigateToNextScreen = () => {
        this.props.navigation.navigate(SING_UP_3)
    }

    render(){
        return(
            <View style = {{flex: 1}}>
                <LogoContainer/>
                <View style = {styles.textContainer}>
                    <Text style = {styles.text}>Nice to meet you NAME, are you student?</Text>
                </View>
                <View style = {styles.secondTextContainer}>
                    <Text style = {styles.opText}>So we can give you fair prices</Text>
                </View>
                <View style = {styles.buttonContainer}>
                    <TouchableOpacity 
                        style = {styles.notActiveButton}
                    >
                        <Text style = {styles.buttonText}>NO</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style = {styles.activeButton}
                        onPress = {this.navigateToNextScreen}    
                    >
                        <Text style = {styles.activeButtonText}>YES</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default SingUp2;