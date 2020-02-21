import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
import { LogoContainer } from '../../../components';
import { SIGN_UP_BENEFITS } from '../../../../navigation/Routes';
import { Props } from './types';

class SignUpName extends React.PureComponent<Props> {
    navigateToNextScreen = () => {
        this.props.navigation.navigate(SIGN_UP_BENEFITS);
    }
    
    componentDidMount() {
        this.props.createUser();
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
                        onChangeText = {this.props.changeName}
                        value = {this.props.name}
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

export default SignUpName;