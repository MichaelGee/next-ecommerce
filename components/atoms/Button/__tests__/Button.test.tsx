import '@testing-library/jest-dom'
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import { PrimaryButton } from '../Button';

configure({ adapter: new Adapter() });



describe('render button', () => {
    it('matches the snapshot', () => {
        const tree = renderer.create(<PrimaryButton />).toJSON();
        expect(tree).toMatchSnapshot();
    })
    test('check if button component exists', () => {
        const wrapper = shallow(<PrimaryButton />);
        expect(wrapper.find(<button />));
    })
})
