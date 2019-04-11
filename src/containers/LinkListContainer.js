import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import LinkList from '../components/LinkList';
import {
  sortLinks,
  sortSelectChange,
  voteUp,
  voteDown,
  addLink,
  removeLink,
  nextPage,
  prevPage,
  pageChange,
  totalPage,
} from '../actions';

const mapStateToProps = (state) => ({
  links: state.links.links,
  orderBy: state.links.orderBy,
  pagination: state.pagination,
});

const mapActionsToProps = {
  sortLinks,
  sortSelectChange,
  voteUp,
  voteDown,
  addLink,
  removeLink,
  nextPage,
  prevPage,
  pageChange,
  totalPage,
};

export const LinkListContainer = withRouter(connect(mapStateToProps, mapActionsToProps)(LinkList));
export default LinkListContainer;
