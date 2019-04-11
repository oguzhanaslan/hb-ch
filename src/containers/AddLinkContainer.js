import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { AddLink } from '../components/AddLink';
import { addLink } from '../actions';

const mapStateToProps = (state) => ({});

const mapActionsToProps = {
  addLink,
};

export const AddLinkContainer = withRouter(connect(mapStateToProps, mapActionsToProps)(AddLink));
export default AddLinkContainer;
