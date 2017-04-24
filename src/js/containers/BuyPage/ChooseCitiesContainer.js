import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getCurrentTab, getLinePosition} from 'js/selectors/AppSelectors';
import {getCityDepart, getCityArrival} from 'js/selectors/BuySelectors';
import {toggleSideComponent} from 'js/actions/AppActions';
import ChooseCities from 'js/components/BuyPage/ChooseCities';

const mapStateToProps = state => ({
	cityDepart: getCityDepart(state),
	cityArrival: getCityArrival(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
	toggleSideComponent,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChooseCities);