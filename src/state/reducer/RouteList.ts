import { RouteState } from '../@types/App';

const defaultState = {
    routeList: [
        {
            id: 1,
            time: 15,
            inWay: 35,
            bus: 24
        },
        {
            id: 2,
            time: 16,
            inWay: 32,
            bus: 43
        },
        {
            id: 1,
            time: 15,
            inWay: 35,
            bus: 24
        },
        {
            id: 2,
            time: 16,
            inWay: 32,
            bus: 43
        },
        {
            id: 1,
            time: 15,
            inWay: 35,
            bus: 24
        },
        {
            id: 2,
            time: 16,
            inWay: 32,
            bus: 43
        },
    ]
}

const RouteListState = (state = defaultState) : RouteState => state;

export { RouteListState };