import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './LinkList.scss';
import LinkItem from '../LinkItem';
import SelectBox from '../SelectBox';
import Pagination from '../Pagination';

class LinkList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paginationLimit: 5,
    };
  }

  componentDidMount() {
    this.setTotalPage();
    this.props.sortLinks();
  }

  sortTypeChange = (e, sortSelectChange, sortLinks) => {
    const { pageChange } = this.props;
    sortSelectChange(e.target.value);
    sortLinks();
    pageChange(1);
  };

  calcTotalPage = (totalItem, limit) => {
    let totalPage = Math.ceil(totalItem / limit);
    return totalPage !== 0 ? totalPage : 1;
  };

  setTotalPage = () => {
    const { links, totalPage } = this.props;
    totalPage(this.calcTotalPage(links.length, this.state.paginationLimit));
  };

  handlePageChange = (page) => {
    const { prevPage, nextPage, pageChange } = this.props;
    if (page === 'prev') {
      prevPage();
    } else if (page === 'next') {
      nextPage();
    } else {
      pageChange(page);
    }
  };

  render() {
    const { links, removeLink, voteDown, voteUp, sortSelectChange, sortLinks, pagination } = this.props;

    let linkItems = [];
    if (pagination.activePage === 1) {
      linkItems = links.slice(0, 5);
    } else {
      let index = (pagination.activePage - 1) * 5;
      linkItems = links.slice(index, index + 5);
    }

    return (
      <div className='col-xs-6 col-xs-offset-3'>
        <div className='add-link'>
          <Link to='/addLink'>Add Link</Link>
        </div>

        <SelectBox value={links.orderBy} onChange={(e) => this.sortTypeChange(e, sortSelectChange, sortLinks)} />

        {linkItems.map((item) => (
          <LinkItem
            key={item.id}
            id={item.id}
            points={item.points}
            title={item.title}
            url={item.url}
            lastModified={item.lastModified}
            removeLink={removeLink}
            voteDown={voteDown}
            voteUp={voteUp}
            sortLinks={sortLinks}
          />
        ))}

        <Pagination
          activePage={pagination.activePage}
          totalPage={pagination.totalPage}
          pageChangeFn={this.handlePageChange}
        />
      </div>
    );
  }
}

LinkList.propTypes = {
  links: PropTypes.array,
  removeLink: PropTypes.func,
  voteDown: PropTypes.func,
  voteUp: PropTypes.func,
  sortSelectChange: PropTypes.func,
  sortLinks: PropTypes.func,
};

export default LinkList;
