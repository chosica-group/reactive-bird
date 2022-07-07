import renderer from 'react-test-renderer';
import { Game } from './game';

describe('Game page render', () => {
  it('Game page renders correctly', () => {
    expect(renderer.create(<Game />).toJSON()).toMatchSnapshot();
  });
});
