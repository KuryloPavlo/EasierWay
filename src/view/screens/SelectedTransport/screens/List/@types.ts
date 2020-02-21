import { NavigationScreenProp } from 'react-navigation';
import { StopsList } from '../../../../../state/@types/StopsList';

export interface Props {
    stopsList: StopsList[];
    navigation: NavigationScreenProp<any, any>;
}