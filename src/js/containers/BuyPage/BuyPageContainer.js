import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getCurrentTab, getLinePosition} from 'js/selectors/AppSelectors';
import {setCurrentTab} from 'js/actions/AppActions';
import BuyPage from 'js/components/BuyPage/BuyPage';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BuyPage);