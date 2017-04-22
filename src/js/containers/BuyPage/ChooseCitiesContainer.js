import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getCurrentTab, getLinePosition} from 'js/selectors/AppSelectors';
import {setCurrentTab} from 'js/actions/AppActions';
import ChooseCities from 'js/components/BuyPage/ChooseCities';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChooseCities);