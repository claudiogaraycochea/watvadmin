import { connect } from 'react-redux';
import { setHeaderTitle } from '../../../store/system/SystemActions';
import Innovation from './Innovation';

const mapStateToProps = (state) => {
	return {
		device: state.default.system.device,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		setHeaderTitle: (headerTitle) => {
			dispatch(setHeaderTitle(headerTitle));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Innovation);
