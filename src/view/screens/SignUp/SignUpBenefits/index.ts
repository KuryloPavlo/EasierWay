import SignUpBenefits from './SignUpBenefits';
import { connect } from 'react-redux';
import { AppState } from '../../../../state/@types/App';
import { Dispatch } from 'redux';
import { chooseBenefits } from '../../../../state/actions/User';

const mapStateToProps = (state: AppState ) => ({
    benefits: state.signUp.users[1].benefits
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    chooseBenefits: (benefits: boolean) => dispatch(chooseBenefits(benefits))
    
})


export default connect(mapStateToProps, mapDispatchToProps)(SignUpBenefits);