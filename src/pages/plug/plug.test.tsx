import renderer from 'react-test-renderer';
import { PlugComponent } from './plug';

describe('Plug page render', () => {
  it('Plug page renders correctly', () => {
    expect(renderer.create(<PlugComponent />).toJSON()).toMatchSnapshot();
  });
});
