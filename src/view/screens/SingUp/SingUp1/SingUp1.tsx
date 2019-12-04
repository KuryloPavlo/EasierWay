import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
import { LogoContainer } from '../../../components';
import { SING_UP_2 } from '../../../../navigation/Routes';

class SingUp1 extends React.PureComponent{
    navigateToNextScreen = () => {
        this.props.navigation.navigate(SING_UP_2);
    }

    render(){
        return(
            <View style = {{flex: 1}}>
                <LogoContainer/>
                <View style = {styles.textContainer}>
                    <Text style = {styles.text}>Hi, whats your name?</Text>
                </View>
                <View style = {styles.textInputContainer}>
                    <TextInput 
                        placeholder = 'Name'
                    />
                </View>
                <TouchableOpacity 
                    style = {styles.buttonContainer}
                    onPress = {this.navigateToNextScreen}
                >
                    <Text style = {styles.textButton}>NEXT</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default SingUp1;