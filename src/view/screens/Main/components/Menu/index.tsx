import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import { AvatarIC, PenIC, HomeIC, WorkIC, FavoriteIC, NotificationBlackIC, TripsIC, BusIC, LogOutIC, SettingIC } from '../../../../../assets/images';
import { PUBLIC_TRANSPORT } from '../../../../../navigation/Routes';


const Menu = () => (
    <View style = {{marginRight: 76, backgroundColor: 'grey'}}>
        <View style = {styles.avatarContainer}>
            <Image
                style = {styles.avatar}
                source = { AvatarIC }
                resizeMode = 'center'
            />
            <View style = {styles.textContainer}>
                <Text style = {styles.boldText}>Dustin Pena</Text>
                <Text>Strong as a bull</Text>
            </View>
            <Image
                style = {styles.ic}
                source = { PenIC }
                resizeMode = 'center'
            />
        </View>
        <TouchableOpacity style = {styles.stripContainer}>
            <Image
                style = {styles.ic}
                source = { HomeIC }
                resizeMode = 'center'
            />
            <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.stripContainer}>
            <Image
                style = {styles.ic}
                source = { HomeIC }
                resizeMode = 'center'
            />
            <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.stripContainer}>
            <Image
                style = {styles.ic}
                source = { WorkIC }
                resizeMode = 'center'
            />
            <Text>Work</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.stripContainer}>
            <Image
                style = {styles.ic}
                source = { FavoriteIC }
                resizeMode = 'center'
            />
            <Text>Favorite</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.stripContainer}>
            <Image
                style = {styles.ic}
                source = { TripsIC }
                resizeMode = 'center'
            />
            <Text>My trips</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.stripContainer}>
            <Image
                style = {styles.ic}
                source = { NotificationBlackIC }
                resizeMode = 'center'
            />
            <Text>Notification</Text>
        </TouchableOpacity>
        <TouchableOpacity 
            style = {styles.stripContainer}
            onPress = {this.props.navigation.navigate(PUBLIC_TRANSPORT)}
        >
            <Image
                style = {styles.ic}
                source = { BusIC }
                resizeMode = 'center'
            />
            <Text>Public transport</Text>
        </TouchableOpacity>
        <View style = {{marginTop: 95}}>
            <TouchableOpacity style = {styles.stripContainer}>
                <Image 
                    style = {styles.ic}
                    source = { SettingIC }
                    resizeMode = 'center'
                />
                <Text>Setting</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.stripContainer}>
                <Image  
                    style = {styles.ic}
                    source = { LogOutIC }
                    resizeMode = 'center'
                />
                <Text>Log Out</Text>
            </TouchableOpacity>
        </View>
    </View>
)

export { Menu };