import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { BackArrowIC, NotificationIC} from '../../../assets/images';

import styles from './styles';
import NavigatorTab from './components/NavigationTabs';

class SelectedTransport extends React.PureComponent {
    navigateBack = () => {
        this.props.navigation.goBack()
    }
    render(){
        return(
            <View style = {{flex: 1}}>
                <View style = {styles.container}>
                    <TouchableOpacity
                        onPress = {this.navigateBack}
                    >
                        <Image
                            style = {styles.ic}
                            source = { BackArrowIC }
                            resizeMode = 'center'
                        />
                    </TouchableOpacity>
                    <Text style = {styles.titleText}>
                        Public Transport
                    </Text>
                    <TouchableOpacity>
                        <Image
                            style = { styles.ic }
                            source = { NotificationIC }
                            resizeMode = 'center'
                        />
                    </TouchableOpacity>
                </View>
                <NavigatorTab/>
            </View>
        )
    }
}

export default SelectedTransport;