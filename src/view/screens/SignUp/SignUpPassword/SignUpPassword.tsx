import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { LogoContainer } from '../../../components/LogoContainer';
import {SIGN_UP_CREDIT_CARD} from '../../../../navigation/Routes';

import styles from './styles';


class SignUpPassword extends React.PureComponent {
    navigateToNextScreen = () => {
        this.props.navigation.navigate(SIGN_UP_CREDIT_CARD);
    }

    render(){
        return(
            <View style = {{flex: 1}}>
                <LogoContainer/>
                <View style = {styles.textContainer} >
                    <Text style = {styles.text}>Now let's create a password</Text>
                </View>
                <View style = {styles.secondTextContainer}>
                    <Text style = {styles.opText}>To secure you</Text>
                </View>
                <View style = {styles.textInputContainer}>
                    <TextInput 
                        placeholder = 'Password'
                    />
                </View>
                <View style = {styles.secondTextInputContainer}>
                    <TextInput
                        placeholder = 'Confirm Password'
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

export default SignUpPassword;