import SignUpPhonenumber from './SignUpPhonenumber';
import { connect } from 'react-redux';
import { AppState } from '../../../../state/@types/App';
import { Dispatch } from 'redux';
import { addPhonenumber } from '../../../../state/actions/User';


const mapStateToProps = (state: AppState) => ({
    phoneNumber: state.signUp.users[1].phoneNumber
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    addPhonenumber: (phoneNumber: string) => dispatch(addPhonenumber(phoneNumber))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPhonenumber);