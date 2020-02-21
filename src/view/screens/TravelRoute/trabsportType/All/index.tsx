import { connect } from 'react-redux';
import All from './All';
import { AppState } from '../../../../../state/@types/App';

const mapStateToProps = (state: AppState) => ({
    routeList: state.routeList.routeList
})

export default connect(mapStateToProps)(All);