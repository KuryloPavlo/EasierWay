import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
import { LogoContainer } from '../../../components';
import { SIGN_UP_BENEFITS } from '../../../../navigation/Routes';
import { Props, State } from './types';

class SignUpName extends React.PureComponent<Props, State> {
    public state: State = {
        user: {
            id: null,
            name: '',
            phoneNumber: '',
            password: null,
            benefits: false
        }
    }
    navigateToNextScreen = () => {
        this.props.navigation.navigate(SIGN_UP_BENEFITS);
    }
    
    onSave = () => {
        this.props.createUser(this.state.user)
    }

    saveAndNavigate = () => {
        this.navigateToNextScreen()
        this.onSave()
    }

    onChangeName = (text: string) => {
        this.setState((prevState: State) => ({
            user: {
                ...prevState.user,
                name: text
            }
        }))
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
                        onChangeText = {text => this.onChangeName(text)}
                        value = {this.state.user.name}
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

export default SignUpName;