/*eslint-env node, mocha */
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { mount, shallow } from 'enzyme';
Enzyme.configure({ adapter: new Adapter() });

import moment from 'moment';
import { dateFromNow } from '../helper';

describe('Render valueToDate util', () => {
  const date = new Date();
  const originalDate = moment(date).format('Do MMMM YYYY, h:mm:ss a');
  const testDate = dateFromNow(originalDate);

  console.log('************' + testDate);

  it('check data', () => {
    const value = testDate;
    // expect(Array.isArray(data)).toBe(true);
  });
});
