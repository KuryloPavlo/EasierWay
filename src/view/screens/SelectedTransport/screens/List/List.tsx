import React from 'react';
import { View, Text, Image } from 'react-native';

import { Props } from './@types';

import { StopsList } from '../../../../../state/@types/StopsList';

class List extends React.PureComponent<Props>{
    constructor(props) {
        super(props);
        this.state = {
            stops: [
                {
                    name: '41 Antonovycha str.',
                    type: 1
                },
                {
                    name: '82 Antonovycha str.',
                    type: 2
                },
                {
                    name: '90 Antonovycha str.',
                    type: 2
                },
                {
                    name: '10 Stepana Bandery str.',
                    type: 2
                },
                {
                    name: '21 Stepana Bandery str.',
                    type: 2
                },
                {
                    name: '72 Arnolda str.',
                    type: 3
                }
            ]
        }
    }

    renderStops = (stops) => {
        const line = [];
        line.push(<Image source = {WalkingStartIC}/>)
        for (let i=0; i<stops.length; i++) {
            if(stops[i].type == 1) {
                line.push(<Image source = {BusStartIC}/>)
            }else if(stops[i].type == 2) {
                line.push(<Image source = {BusLineIC}/>)
            }else if (stops[i].type == 3) {
                line.push(<Image source = {BusEndIC}/>)
            }
        }
        line.push(<Image source = {WalingEndIC}/>)
        return line;
    }
    

    render(){
        return(
            <View>
                <Text>Hi there</Text>
            </View>
        )
    }
}

export default List;