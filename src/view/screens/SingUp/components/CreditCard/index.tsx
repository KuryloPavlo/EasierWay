import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './styles';

const CreditCard = () => (
    <View style = {styles.container}>
        <View style = {styles.firstContainer}>
            <View style = {styles.cardContainer}>
                <Text style = {styles.smallText}>Card number</Text>
                <TextInput 
                    style = {styles.bigText}
                    placeholder = '0123456789012345'
                    placeholderTextColor = '#FFFFFF'
                />
            </View>
            <View style = {styles.expiresContainer}>
                <Text style = {styles.smallText}>Expires</Text>
                <TextInput 
                    style = {styles.bigText}
                    placeholder = 'MM/YY'
                    placeholderTextColor = '#FFFFFF'
                />
            </View>
        </View>
        <View style = {styles.secondContainer}>
            <View style = {styles.nameContainer}>
                <Text style = {styles.smallText}>Name</Text>
                <TextInput 
                    style = {styles.bigText}
                    placeholder = 'JOHN DOE'
                    placeholderTextColor = '#FFFFFF'
                    
                />
            </View>
            <View style = {styles.cvvContainer}>
                <Text style = {styles.smallText}>CVV</Text>
                <TextInput 
                    style = {styles.bigText}
                    placeholder = '000'
                    placeholderTextColor = '#FFFFFF'
                />
            </View>
        </View>
    </View>
)

export { CreditCard }