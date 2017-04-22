import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getPassengers} from 'js/selectors/BuySelectors';
import {showNotification} from 'js/actions/AppActions';
import {setPassengers} from 'js/actions/BuyActions';
import ChoosePassengers from 'js/components/BuyPage/ChoosePassengers';

const mapStateToProps = state => ({
	passengers: getPassengers(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
	showNotification,
	setPassengers,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChoosePassengers);