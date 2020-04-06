import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { LogoContainer } from '../../../components';
import { PhoneIC } from '../../../../assets/images';
import styles from './styles';
import { SIGN_UP_PASSWORD } from '../../../../navigation/Routes';
import { Props, State } from './types';

class SignUpPhonenumber extends React.PureComponent<Props, State> {
    public state: State = {
        phonenumber: ''
    }
    navigateToNextScreen = () => {
        this.props.navigation.navigate(SIGN_UP_PASSWORD );
    }

    savePassword = () => {
        this.props.addPhonenumber(this.state.phonenumber)
    }

    saveAndNavigate = () => {
        this.savePassword()
        this.navigateToNextScreen()
    }

    onChangePhonenumber = (text: string) => {
        this.setState({phonenumber: text})
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
                        onChangeText = {this.onChangePhonenumber}
                        value = {this.state.phonenumber}
                    />
                </View>
                <TouchableOpacity
                    style = {styles.buttonContainer}
                    onPress = {this.saveAndNavigate}
                >
                    <Text style = {styles.textButton}>NEXT</Text>
                </TouchableOpacity>

            </View>
        )
    }
}

export default SignUpPhonenumber;