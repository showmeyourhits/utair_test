import {connect} from 'react-redux';
import {getSideComponent} from 'js/selectors/AppSelectors';
import App from 'js/components/App';

const mapStateToProps = state => ({
	sideComponent: getSideComponent(state),
});

export default connect(mapStateToProps)(App);