import { connect } from 'react-redux';
import  Bus  from './Bus';
import { AppState } from '../../../../../state/@types/App';


const mapStateToProps = (state: AppState) => ({
    busList: state.busList.busList
})

export default connect(mapStateToProps)(Bus);