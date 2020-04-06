import SignUpPassword from './SignUpPassword';
import { connect } from 'react-redux';
import { AppState } from '../../../../state/@types/App';
import { Dispatch } from 'redux';
import { addPassword } from '../../../../state/actions/User';

const mapStateToProps = (state: AppState) => ({
    password: (state.signUp.users[1]).password
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    addPassword: (password: string) => dispatch(addPassword(password))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPassword);