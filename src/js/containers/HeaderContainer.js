import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getCurrentTab} from 'js/selectors/AppSelectors';
import {setCurrentTab} from 'js/actions/AppActions';
import Header from 'js/components/Header';

const mapStateToProps = state => ({
	currentTab: getCurrentTab(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
	setCurrentTab,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);