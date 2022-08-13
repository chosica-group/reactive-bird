import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { WelcomePage } from './welcome-page';

describe('Start Game Page page render', () => {
  it('Start Game Page page renders correctly', () => {
    expect(
      renderer
        .create(
          <BrowserRouter>
            <WelcomePage />
          </BrowserRouter>,
        )
        .toJSON(),
    ).toMatchSnapshot();
  });
});
