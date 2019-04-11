import React from 'react';
import './Pagination.scss';

class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hrefLink: '#', //passed as a arg like href={hrefLink} for eslint
    };
  }

  createRenderedPaginate(activePage, totalPage, pageChangeFn) {
    let paginationElements = [];

    for (let i = 1; i <= totalPage; i++) {
      paginationElements.push(
        <li key={`item-${i}`} className={`${activePage === i ? 'active' : ''}`} onClick={() => pageChangeFn(i)}>
          <a href={this.state.hrefLink}>{i}</a>
        </li>
      );
    }

    return paginationElements;
  }

  render() {
    const { activePage, totalPage, pageChangeFn } = this.props;
    return (
      <ul className='pagination'>
        <li className={`${activePage === 1 ? 'disabled' : ''}`} onClick={() => pageChangeFn('prev')}>
          <a href={this.state.hrefLink}>Prev</a>
        </li>
        {this.createRenderedPaginate(activePage, totalPage, pageChangeFn)}
        <li className={`${activePage === totalPage ? 'disabled' : ''}`} onClick={() => pageChangeFn('next')}>
          <a href={this.state.hrefLink}>Next</a>
        </li>
      </ul>
    );
  }
}

export default Pagination;
