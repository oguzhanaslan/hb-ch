import React from 'react';
import PropTypes from 'prop-types';
import './SelectBox.scss';

const SelectBox = ({ value, onChange }) => {
  return (
    <div>
      <select className='form-select' value={value} onChange={(e) => onChange(e)}>
        <option value='lastAdded'>Last Added</option>
        <option value='mostVoted'>Most Voted (a->z)</option>
        <option value='lessVoted'>Less Voted (z->a)</option>
      </select>
    </div>
  );
};

SelectBox.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default SelectBox;
