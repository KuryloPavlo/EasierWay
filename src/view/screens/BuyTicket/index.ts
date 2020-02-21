import BuyTicket from './BuyTicket';
import {connect} from 'react-redux';
import { AppState } from '../../../state/@types/App';
import { Dispatch } from 'redux';
import { increaseAmount, decreaseAmount } from '../../../state/actions/BuyTicket';

const mapStateToProps = (state: AppState) => ({
    ...state.buyTicketList
}) 

const mapDispatchToProps = (dispatch: Dispatch) => ({
    increase: (field: string) => dispatch(increaseAmount(field)),
    decrease: (field: string) => dispatch(decreaseAmount(field))
})

export default connect(mapStateToProps, mapDispatchToProps)(BuyTicket);