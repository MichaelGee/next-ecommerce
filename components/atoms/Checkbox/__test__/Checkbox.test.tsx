import '@testing-library/jest-dom'
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import { CheckboxComponent } from '../Checkbox';


configure({ adapter: new Adapter() });


describe('render input', () => {
    it('matches the snapshot', () => {
        const tree = renderer.create(<CheckboxComponent />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    test('check if input component exist', () => {
        const wrapper = shallow(<CheckboxComponent />);
        expect(wrapper.find(<label />));
         expect(wrapper.find(<input />));
    })
})