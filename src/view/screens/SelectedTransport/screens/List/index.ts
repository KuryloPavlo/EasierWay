import { connect } from 'react-redux';
import List from './List';
import { AppState } from '../../../../../state/@types/App';

const mapStateToProps = (state: AppState) => ({
    stopsList: state.stopsList.stopsList
})

export default connect(mapStateToProps)(List);