import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { FullscreenBtn } from 'components/fullscreen-btn/fullscreen-btn';
import Enzyme from 'enzyme';
import renderer from 'react-test-renderer';

Enzyme.configure({ adapter: new Adapter() });

describe('Fullscreen button', () => {
  it(' Fullscreen button renders correctly', () => {
    expect(
      renderer.create(<FullscreenBtn element={document.documentElement} />).toJSON(),
    ).toMatchSnapshot();
  });
});
