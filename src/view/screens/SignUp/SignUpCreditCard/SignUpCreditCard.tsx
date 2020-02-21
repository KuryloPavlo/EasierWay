import React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { LogoContainer } from '../../../components';
import styles from './styles';
import { CreditCard } from '../components/CreditCard';
import { MAIN } from '../../../../navigation/Routes';

class SignUpCreditCard extends React.PureComponent {
    navigateToMain = () => {
        this.props.navigation.navigate(MAIN);
    }

    render(){
        return(
            <View style = {{flex: 1, height: Dimensions.get('screen').height}}>
                <LogoContainer/>
                <View style = {styles.textContainer}>
                    <Text style = {styles.text}>Would you like to setup payment method?</Text>
                </View>
                <View style = {styles.secondTextContainer}>
                    <Text style = {styles.opText}>So you could buy tickets via app</Text>
                </View>
                <CreditCard />
                <View style = {styles.buttonContainer}>
                        <TouchableOpacity
                            style = {styles.notActiveButton}
                            onPress = {this.navigateToMain}
                        >
                            <Text style = {styles.buttonText}>LATER</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style = {styles.activeButton}
                            onPress = {this.navigateToMain}
                        >
                            <Text style = {styles.activeButtonText}>YES</Text>
                        </TouchableOpacity>
                    </View>
            </View>
        )
    }
}

export default SignUpCreditCard;