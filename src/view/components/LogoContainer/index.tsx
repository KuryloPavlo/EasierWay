import React from 'react';
import { View, Image } from 'react-native';
import styles from './styles';
import { LogoIC } from '../../../assets/images';

const LogoContainer = () => (
    <View style = {styles.container}>
        <Image
            style = {styles.logo}
            source = { LogoIC }
            resizeMethod = 'resize'
            resizeMode = 'center'
        />
    </View>
)

export { LogoContainer };