import React from 'react';
import { View, Text, TouchableOpacity, KeyboardAvoidingView, Dimensions } from 'react-native';
import { LogoContainer } from '../../../components';
import styles from './styles';
import { CreditCard } from '../components/CreditCard';

class SingUp4 extends React.PureComponent {
    render(){
        return(
            // <KeyboardAvoidingView  
            //     style = {{flex: 1, }}
            //     contentContainerStyle = {{height: Dimensions.get('window').height}}
            //     behavior = 'height'
            //     enabled
            // >
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
                        >
                            <Text style = {styles.buttonText}>LATER</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style = {styles.activeButton}
                        >
                            <Text style = {styles.activeButtonText}>YES</Text>
                        </TouchableOpacity>
                    </View>
            </View>
            // </KeyboardAvoidingView>
        )
    }
}

export default SingUp4;