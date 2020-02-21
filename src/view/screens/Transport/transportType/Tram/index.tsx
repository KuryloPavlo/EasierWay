import React from 'react';
import { View, Text, Image } from 'react-native';
import { WhiteTramIC, FullStarIC, NoneStarIC, HalfStarIC } from '../../../../../assets/images';

class Tram extends React.PureComponent {
    static navigationOptions = () => ({
        tabBarIcon: () => (
            <Image
                style = {{width: 24, height: 24}}
                source = {WhiteTramIC}
                resizeMode = 'center'
            />
        )
    })
    
    renderStars = (number) => {
        const stars = [];
        const filledStarsAmount = parseInt(number);
        const doublePart = number - filledStarsAmount;
        for(let i=0; i<filledStarsAmount; i++) {
            stars.push(<Image source={FullStarIC} />)
        }
        let emptyStarsAmount = 5 - filledStarsAmount;
        if(doublePart >= 0.5) {
            emptyStarsAmount  -= 1;
            stars.push(<Image source={HalfStarIC} />)
        }
        if(emptyStarsAmount > 0) {
            for(let i=0; i<emptyStarsAmount; i++) {
                stars.push(<Image source={NoneStarIC} />)
            }
        }
        return stars;
    }

    render(){
        return(
            <View>
                <View style = {{flexDirection: 'row'}}>
                    {this.renderStars(3.7)}
                </View>
            </View>
        )
    }
}

export default Tram;