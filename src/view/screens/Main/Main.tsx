import React from 'react';
import { View, Image, TouchableOpacity, TextInput, Text } from 'react-native';

import { MenuIC, NotificationIC, SearchIC } from '../../../assets/images';

import MapView from 'react-native-maps';

import { Menu } from './components/Menu';
import { BuyTicketBut } from '../../components/BuyTicketBut';
import { NavigationDrawer } from '../../../navigation/navigationDrawer';

import styles from './styles';
import { TRAVEL_ROUTE, SELECTED_TRANSPORT } from '../../../navigation/Routes';

class Main extends React.PureComponent{
    static navigationOptions = () => ({
        drawerLabel: 'Main',
        
    })

    navigateToChoosenRoute = () => {
        this.props.navigation.navigate(TRAVEL_ROUTE);
    }

    navigateToSelectedScreen = () => {
        this.props.navigation.navigate(SELECTED_TRANSPORT)
    }

    render(){
        return(
            <View style = {{flex: 1}}>
                <View style = {styles.navigationBar}>
                    <TouchableOpacity
                        onPress = {this.props.navigation.openDrawer}
                    >
                        <Image 
                            style = {styles.ic}
                            source = { MenuIC }
                            resizeMode = 'center'
                        />
                    </TouchableOpacity>
                    <Text style = {styles.text}>Map</Text>
                    <TouchableOpacity
                        onPress = {this.navigateToSelectedScreen}
                    >
                        <Image
                            style = {styles.ic}
                            source = { NotificationIC }
                            resizeMode = 'center'
                        />
                    </TouchableOpacity>
                </View>
                <View style = {styles.mapsContainer}>
                    <MapView
                        provider={null}
                        zoomControlEnabled
                        style={styles.map}
                        initialRegion = {{
                            latitude: 49.838346,
                            longitude: 24.029973,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                        scrollEnabled
                        loadingIndicatorColor="#666666"
                        loadingBackgroundColor="#eeeeee"
                    />
                    <View style = {styles.textInpuntContainer}>
                        <TouchableOpacity
                            onPress = {this.navigateToChoosenRoute}
                        >
                            <Image 
                                style = {styles.ic}
                                source = { SearchIC }
                            />
                        </TouchableOpacity>    
                        <TextInput
                            style = {{flex: 1}}
                        />
                    </View>
                    <BuyTicketBut
                        navigation = {this.props.navigation}
                    />
                </View>
            </View>
        )
    }
}

export default Main;