import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { LogoContainer } from '../../../components';
import { PhoneIC } from '../../../../assets/images';
import styles from './styles';
import { SIGN_UP_PASSWORD } from '../../../../navigation/Routes';
import { Props } from './types';

class SignUpPhonenumber extends React.PureComponent<Props> {
    navigateToNextScreen = () => {
        this.props.navigation.navigate(SIGN_UP_PASSWORD );
    }

    render(){
        return(
            <View style = {{flex: 1}}>
                <LogoContainer/>
                <View style = {styles.textContainer}>
                    <Text style = {styles.text}>Please provide us your phone number?</Text>
                </View>
                <View style = {styles.secondTextContainer}>
                    <Text style = {styles.opText}>It'll be your login</Text>
                </View>
                <View style = {styles.textInputContainer}>
                    <Image
                        style = {styles.image}
                        source = { PhoneIC }
                        resizeMethod = 'resize'
                        resizeMode = 'center'
                    />
                    <TextInput
                        placeholder = 'Your number'
                        onChangeText = {this.props.addPhonenumber}
                        value = {this.props.phoneNumber}
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

export default SignUpPhonenumber;