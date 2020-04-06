import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { Props } from './types';
import styles from './styles';

class ErorWindow extends React.PureComponent<Props> {
    render(){
        const show, onClose = this.props;
        return show !? (
            <View style = {styles.container}>
                <View style = {styles.textContainer}>
                <Text>Passwords do not match</Text>
                </View>
                <TouchableOpacity
                    style = {styles.buttonContainer}
                    onPress = {onClose}
                >
                    <Text>Ok</Text>
                </TouchableOpacity>
            </View>
        ) : null;
    }
}

export {ErorWindow};