import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getCities as requestCities} from 'js/actions/BuyActions';
import {toggleSideComponent} from 'js/actions/AppActions';
import {getCities} from 'js/selectors/BuySelectors';
import CitiesPicker from 'js/components/BuyPage/CitiesPicker';

const mapStateToProps = (state, {currentCity, type})=> ({
	currentCity,
	type,
	cities: getCities(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
	getCities: requestCities,
	toggleSideComponent,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CitiesPicker);