import { NavigationScreenProp } from 'react-navigation';
import { BusList } from '../../../../../state/@types/BusList';

export interface Props {
    busList: BusList[];
    navigation: NavigationScreenProp<any, any>;
}