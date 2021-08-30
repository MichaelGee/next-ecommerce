import '@testing-library/jest-dom'
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import { InputComponent } from '../Input';

configure({ adapter: new Adapter() });


describe('render input', () => {
    it('matches the snapshot', () => {
        const tree = renderer.create(<InputComponent />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    test('check if input component exist', () => {
        const wrapper = shallow(<InputComponent />);
        expect(wrapper.find(<input />));
    })
})