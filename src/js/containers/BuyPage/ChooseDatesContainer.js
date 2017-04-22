import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getCurrentTab, getLinePosition} from 'js/selectors/AppSelectors';
import {setCurrentTab} from 'js/actions/AppActions';
import ChooseDates from 'js/components/BuyPage/ChooseDates';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChooseDates);