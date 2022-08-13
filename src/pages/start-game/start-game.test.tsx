import renderer from 'react-test-renderer';
import { StartGamePage } from './start-game';

describe('Start Game Page page render', () => {
  it('Start Game Page page renders correctly', () => {
    expect(renderer.create(<StartGamePage />).toJSON()).toMatchSnapshot();
  });
});
