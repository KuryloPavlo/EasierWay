import React from 'react';
import { View } from 'react-native';

import MapView, {Marker, Circle, PROVIDER_GOOGLE, Polyline} from 'react-native-maps';
import styles from './styles';

import TicketContainer from '../../components/ticketContainer';

class Map extends React.PureComponent {
    render(){
        return(
            <View style = {{flex: 1}}>
                <MapView
                    provider = {PROVIDER_GOOGLE}
                    zoomControlEnabled
                    style = {styles.map}
                    initialRegion = {{
                        latitude: 49.838346,
                        longitude: 24.029973,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                    scrollEnabled
                    loadingIndicatorColor="#666666"
                    loadingBackgroundColor="#eeeeee"
                >
                    {/* <Polyline
                        coordinates= {[
                            {latitude: 49.844401, longitude: 24.025502 },
                            {latitude: 49.841218, longitude: 24.027370 },
                            {latitude: 49.839550, longitude: 24.028797 },
                            {latitude: 49.839093, longitude: 24.030471 }
                        ]}
                        strokeColor="#000" 
                        strokeColors={[
                            '#7F0000',
                            '#00000000', 
                            '#B24112',
                            '#E5845C',
                            '#238C23',
                            '#7F0000'
                        ]}
                        strokeWidth={6}
                    /> */}
                </MapView>
                <TicketContainer/>
            </View>
        )
    }
}

export default Map;