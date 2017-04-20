import {connect} from 'react-redux';
import {getCurrentTab} from 'js/selectors/AppSelectors';
import Body from 'js/components/Body';

const mapStateToProps = state => ({
	currentTab: getCurrentTab(state),
});

export default connect(mapStateToProps)(Body);