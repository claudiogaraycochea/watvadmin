import { connect } from 'react-redux';

import { setDevice } from '../../store/system/SystemActions';

import Dashboard from './Dashboard';

const mapStateToProps = function mapState(state) {
	return {
		device: state.default.system.device,
	};
};

const mapDispatchToProps = function mapDispatch(dispatch) {
	return {
		setDevice(device) {
			dispatch(setDevice(device));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
