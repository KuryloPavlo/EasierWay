import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { LogoContainer } from '../../../components';
import { PhoneIC } from '../../../../assets/images';
import styles from './styles';
import { SING_UP_4 } from '../../../../navigation/Routes';

class SingUp3 extends React.PureComponent {
    navigateToNextScreen = () => {
        this.props.navigation.navigate(SING_UP_4);
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

export default SingUp3;