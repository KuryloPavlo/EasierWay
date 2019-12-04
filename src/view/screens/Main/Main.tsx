import React from 'react';
import { View, Text, Image } from 'react-native';
import { MenuIC, NotificationIC } from '../../../assets/images';
import MapView from 'react-native-maps';
import styles from './styles';

class Main extends React.PureComponent{
    render(){
        return(
            <View style = {{flex: 1}}> 
                <View style = {styles.navigationBar}>
                    <Image 
                        style = {styles.ic}
                        source = { MenuIC }
                        resizeMethod = 'resize'
                        resizeMode = 'center'
                    />
                    <Image
                        style = {styles.ic}
                        source = { NotificationIC }
                        resizeMethod = 'resize'
                        resizeMode = 'center'
                    />
                </View>
                <View style = {styles.mapsContainer}>
                    <MapView
                        style={styles.map}
                        initialRegion={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                        zoomEnabled
                        scrollEnabled
                        loadingIndicatorColor="#666666"
                        loadingBackgroundColor="#eeeeee"
                    />
                    <Text>sgklr</Text>
                </View>
            </View>
        )
    }
}

export default Main;