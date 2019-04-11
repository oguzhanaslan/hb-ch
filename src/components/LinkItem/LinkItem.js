import React from 'react';
import PropTypes from 'prop-types';
import './LinkItem.scss';
import removeIcon from '../../common/images/cancel.svg';
import arrowUp from '../../common/images/arrow_up.svg';
import arrowDown from '../../common/images/arrow_down.svg';
import { dateFromNow } from '../../utils/helper';

const LinkItem = ({ id, points, title, url, removeLink, lastModified, voteDown, voteUp, sortLinks }) => {
  return (
    <div className='linkItem' key={id}>
      <div className='point-left'>
        <div className='point'>
          <div>
            <div className='point-count'>{points}</div>
            <div>Point</div>
          </div>
        </div>
      </div>
      <div className='point-right'>
        <div className='title'>
          <h3>{title}</h3>
          <a className='link' href={url} rel='noopener noreferrer'>
            {url}
          </a>
          <div>{dateFromNow(lastModified)}</div>
        </div>

        <div className='vote'>
          <div
            onClick={(e) => {
              voteUp(id);
              sortLinks();
            }}
          >
            <img src={arrowUp} alt='up vote' />Up Vote
          </div>
          <div
            onClick={(e) => {
              voteDown(id);
              sortLinks();
            }}
          >
            <img src={arrowDown} alt='down vote' /> Down Vote
          </div>
        </div>

        <div
          className='remove-btn'
          onClick={(e) => window.confirm('Are you sure you wish to delete this game?') && removeLink(id)}
        >
          <img src={removeIcon} alt='remove item' />
        </div>
      </div>
    </div>
  );
};

LinkItem.propTypes = {
  id: PropTypes.string,
  points: PropTypes.number,
  title: PropTypes.string,
  url: PropTypes.string,
  removeLink: PropTypes.func,
  voteDown: PropTypes.func,
  voteUp: PropTypes.func,
};

export default LinkItem;
