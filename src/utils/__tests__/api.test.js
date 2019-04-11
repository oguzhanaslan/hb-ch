import { apiData } from '../api';
/*eslint-env node, mocha */
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { mount, shallow } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

describe('Render valueToDate util', () => {
  let data = apiData;

  it('check data', () => {
    const value = data;
    expect(Array.isArray(data)).toBe(true);
  });

  it('fake data length', () => {
    const value = data;
    expect(data).toHaveLength(35);
  });
});
