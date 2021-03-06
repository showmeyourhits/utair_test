import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getCurrentTab, getLinePosition} from 'js/selectors/AppSelectors';
import {setCurrentTab, toggleSideComponent} from 'js/actions/AppActions';
import Header from 'js/components/Header';

const mapStateToProps = state => ({
	currentTab: getCurrentTab(state),
	linePosition: getLinePosition(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
	setCurrentTab,
	toggleSideComponent,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);