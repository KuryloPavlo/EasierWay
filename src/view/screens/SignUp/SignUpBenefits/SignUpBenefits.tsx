import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { LogoContainer } from '../../../components';
import styles from './styles';
import { SIGN_UP_PHONENUMBER } from '../../../../navigation/Routes';
import { Props } from './types';


class SignUpBenefits extends React.PureComponent<Props> {
    navigateToNextScreen = () => {
        this.props.navigation.navigate(SIGN_UP_PHONENUMBER)
    }

    changeBenefits = () => {
        this.props.chooseBenefits(true)
    }

    changeBenefitsAndNavigate = () => {
        this.changeBenefits()
        this.navigateToNextScreen()
    }

    render(){
        return(
            <View style = {{flex: 1}}>
                <LogoContainer/>
                <View style = {styles.textContainer}>
                    <Text style = {styles.text}>Nice to meet you {this.props.name} , are you student?</Text>
                </View>
                <View style = {styles.secondTextContainer}>
                    <Text style = {styles.opText}>So we can give you fair prices</Text>
                </View>
                <View style = {styles.buttonContainer}>
                    <TouchableOpacity 
                        style = {styles.notActiveButton}
                        onPress = {this.navigateToNextScreen}
                    >
                        <Text style = {styles.buttonText}>NO</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style = {styles.activeButton}
                        onPress = {this.changeBenefitsAndNavigate}
                    >
                        <Text style = {styles.activeButtonText}>YES</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default SignUpBenefits;