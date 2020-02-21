import React from 'react';
import { View, Text, Image, TouchableOpacity, Switch } from 'react-native';

import { Props } from './@types'; 

import styles from './styles';
import { BackArrowIC, FiltIC, CardIC, ArrowDownIC} from '../../../assets/images';

import TicketTile from './components/TicketTile';
import { TICKET } from '../../../navigation/Routes';

import { MyView, PopupWindow } from '../../components';


class BuyTicket extends React.PureComponent<Props>{
    constructor(props) {
        super(props);
        this.state = {
            isHidden: false,
            show: false
        };
    }

    navigateToTicket = () => {
        this.props.navigation.navigate(TICKET);
    }

    navigateBack = () => {
        this.props.navigation.goBack()
    }

    onClose = () => {
        this.setState({show: false});
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
                    <Text style = {styles.whiteText}>Buy Ticket</Text>
                    <TouchableOpacity>
                        <Image
                            style = {styles.ic}
                            source = { FiltIC }
                            resizeMode = 'center'
                        />
                    </TouchableOpacity>
                </View>
                <TicketTile
                    {...this.props.regular}
                    onPlusPress = {() => this.props.increase('regular')}
                    onMinusPress = {() => this.props.decrease('regular')}
                />
                <TicketTile
                    {...this.props.student}
                    onPlusPress = {() => this.props.increase('student')}
                    onMinusPress = {() => this.props.decrease('student')}
                />
                <View style = {styles.switchContainer}>
                    <Text>Luggage</Text>
                    <Switch
                        onValueChange = {value => this.setState({isHidden: value})}
                        value = {this.state.isHidden}
                    />
                </View>
                <MyView hide={!this.state.isHidden}>
                    <TicketTile
                        {...this.props.luggage}
                        onPlusPress = {() => this.props.increase('luggage')}
                        onMinusPress = {() => this.props.decrease('luggage')}
                    />
                </MyView>
                <TouchableOpacity style = {styles.buyTicketContainer}>
                    <View style = {styles.textContainer}>
                        <Text style = {styles.text}>Monthly</Text>
                    </View>
                    <View style = {styles.priceContainer}>
                        <Text style = {styles.priceText}>275</Text>
                        <Text style = {styles.currencyText}>UAH</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.cardContainer}> 
                    <Image 
                        style = {styles.ic}
                        source = {CardIC}
                        resizeMode = 'center'
                    />
                    <Text>**** 2231</Text>
                    <Image
                        style = {styles.ic}
                        source = {ArrowDownIC}
                        resizeMode = 'center'
                    />
                </TouchableOpacity>
                <View style = {styles.buttonContainer}>
                    <TouchableOpacity
                        style = {styles.cancelButt}
                        onPress = {this.navigateBack}
                    >
                        <Text>CANCEL</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style = {styles.buyButt}
                        onPress = {() => this.setState({show: true})}
                    >
                        <Text style = {{color: '#FFFFFF'}}>BUY(5UAH)</Text>
                    </TouchableOpacity>
                </View>
                <PopupWindow 
                    show = {this.state.show}
                    onClose = {this.onClose}
                    navigation = {this.props.navigation}    
                />
            </View>     
        )
    }
}

export default BuyTicket;