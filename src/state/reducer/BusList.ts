import { BusState } from '../@types/App';


const defaultState = {
    busList: [
        {
            id: 1,
            number: '15',
            firstStope: "23 Hnata Hotkevucha str.",
            lastStope: '5 Pid Dubom str.'
        },
        {
            id: 2,
            number: '41',
            firstStope: '44 Brandie Howard str.',
            lastStope: '11 Shawn  str.'
        },
        {
            id: 3,
            number: '47',
            firstStope: '21 Steward str.',
            lastStope: '42 Bell str.'
        },
        {
            id: 4,
            number: '49',
            firstStope: '44 Mckinney str.',
            lastStope: '78 Fox str.'
        },
        {
            id: 5,
            number: '52',
            firstStope: '1 Webb str.',
            lastStope: '12 Esther Nguyen str.'
        },
        {
            id: 6,
            number: '78',
            firstStope: '34 Miles str.',
            lastStope: '97 Russell str.'
        },
        {
            id: 7,
            number: '79',
            firstStope: '89 Warren str.',
            lastStope: '41 Watson str.'
        }
    ]
}

const BusListState = (state = defaultState) : BusState => state;

export { BusListState };