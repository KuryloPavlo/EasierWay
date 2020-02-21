import SignUpName from './SignUpName';
import { connect } from 'react-redux';
import { AppState } from '../../../../state/@types/App';
import { Dispatch } from 'redux';
import { createUser, addName } from '../../../../state/actions/User';


const mapStateToProps = (state: AppState)  => ({
    name: (state.signUp.users[1] || {}).name
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    createUser: () => dispatch(createUser()),
    changeName: (name: string) => dispatch(addName(name))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUpName);