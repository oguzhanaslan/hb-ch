import moment from 'moment';

export const dateFromNow = (date) => {
  return date ? moment(date).from() : null;
};
