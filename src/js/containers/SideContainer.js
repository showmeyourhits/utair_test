import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getSideComponent} from 'js/selectors/AppSelectors';
import {toggleSideComponent} from 'js/actions/AppActions';
import SideComponent from 'js/components/SideComponent';

const mapStateToProps = state => ({
	sideComponent: getSideComponent(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
	toggleSideComponent,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SideComponent);