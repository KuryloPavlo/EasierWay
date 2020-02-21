import { StopsState } from '../@types/App';

const defaultState = {
    stopsList: [
        {
            name: '41 Antonovycha str.',
            id: 1,
            type: 1
        },
        {
            name: '82 Antonovycha str.',
            id: 2,
            type: 2
        },
        {
            name: '90 Antonovycha str.',
            id: 3,
            type: 2
        },
        {
            name: '10 Stepana Bandery str.',
            id: 4,
            type: 2
        },
        {
            name: '21 Stepana Bandery str.',
            id: 5,
            type: 3
        }
    ]
}

const StopsListState = (state = defaultState) : StopsState => state;

export { StopsListState };