import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { LogoContainer } from '../../../components/LogoContainer';
import {SIGN_UP_CREDIT_CARD} from '../../../../navigation/Routes';

import { Props, State } from './types';
import styles from './styles';

import { ErorWindow } from './components/ErorWindow';

class SignUpPassword extends React.PureComponent<Props, State> {
    public state: State = {
        first: '123',
        second: '321',
        show: false
    }
    chekAndNavigate = () => {
        if (this.comparisonPassword()){
            this.navigateToNextScrean()
            this.savePassword()            
        } else {
            this.setState({show: true})
        }
        
    }

    navigateToNextScrean = () => {
        this.props.navigation.navigate(SIGN_UP_CREDIT_CARD);
    }

    firstPassword = (password: string) => {
        this.setState({first: password})
    }

    secondPassword = (password: string) => {
        this.setState({second: password})
    }

    comparisonPassword = () => {
        if (this.state.first === this.state.second) {
            return true;
        } else {
            return false
        }
    }

    savePassword = () => {
        this.props.addPassword(this.state.first)
    }

    onClose = () => {
        this.setState({show: false});
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
                        onChangeText = {this.firstPassword}
                    />
                </View>
                <View style = {styles.secondTextInputContainer}>
                    <TextInput
                        placeholder = 'Confirm Password'
                        onChangeText = {this.secondPassword}
                    />
                </View>
                <TouchableOpacity
                    style = {styles.buttonContainer}
                    onPress = {this.chekAndNavigate}
                >
                    <Text style = {styles.textButton}>NEXT</Text>
                </TouchableOpacity>
                <ErorWindow
                    show = {this.state.show}
                    onClose = {this.onClose}
                />
            </View>
        )
    }
}

export default SignUpPassword;