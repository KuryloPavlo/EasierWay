import React from 'react';
import { Text, TextInput, Image, View, TouchableOpacity } from 'react-native';
import styles from './styles';
import { PersonIC, GoogleIC, FaceBookIC, LockIC, SingInIC } from '../../../assets/images';
import { LogoContainer } from '../../components';
import { SIGN_UP_NAME, MAIN } from '../../../navigation/Routes';

class Login extends React.PureComponent {
    navigateToSingIn = () => {
        this.props.navigation.navigate(SIGN_UP_NAME);
    }

    navigateToMain = () => {
        this.props.navigation.navigate(MAIN);
    }

    render(){
        return(
            <View style = {{flex: 1}}>
                <LogoContainer/>
                <View style = {styles.textContainer}>
                    <Text style = {styles.logoText}>Fast Lane</Text>
                </View>
                <View style = {styles.textInputContainer}>
                    <View style = {styles.textInput}>
                        <Image
                            style = {styles.icon}
                            source = { PersonIC }
                            resizeMethod = 'resize'
                            resizeMode = 'center'
                        />
                        <TextInput                                        //must something do
                            placeholder = 'Phone number'
                        />
                    </View>
                    <View style = {styles.secondTextInput}>
                        <Image
                            style = {styles.icon}
                            source = { LockIC }
                            resizeMethod = 'resize'
                            resizeMode = 'center'
                        />
                        <TextInput                                          //must something do
                            placeholder = 'Password'
                        />
                    </View>            
                    <TouchableOpacity                                       //must something do               
                         style = {styles.button}
                         onPress = {this.navigateToMain}
                    > 
                        <Image 
                            style = {styles.signInIC}                                 
                            source = { SingInIC }
                            resizeMode = 'contain'
                        />
                        <Text style = {styles.buttonText}>SIGN IN</Text>
                    </TouchableOpacity>
                </View>
                <View style = {styles.accountNavigationContainer}>
                    <TouchableOpacity                                       //must something do
                        onPress = {this.navigateToSingIn}
                    >
                        <Text style = {styles.smallText}>Create Account</Text>
                    </TouchableOpacity>
                    <TouchableOpacity                                       //must something do
                    >
                        <Text style = {styles.secondSmallText}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>
                <View style = {styles.singText}>
                    <Text style = {styles.bigText}>Sing In Via</Text>
                </View>
                <View style = {styles.socialNetworks}>
                    <TouchableOpacity                                       //must something do
                    >
                        <Image 
                            style = {styles.google}
                            source = { GoogleIC }
                            resizeMethod = 'resize'
                            resizeMode = 'center'
                        />
                    </TouchableOpacity>
                    <TouchableOpacity                                       //must something do
                    >
                        <Image
                            style = {styles.facebook}
                            source = { FaceBookIC }
                            resizeMethod = 'resize'
                            resizeMode = 'center'
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default Login;
