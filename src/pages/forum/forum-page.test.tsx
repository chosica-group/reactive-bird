import { ForumPage } from 'pages/forum/forum-page';
import renderer from 'react-test-renderer';

describe('Forum page render', () => {
  it('Forum page renders correctly', () => {
    expect(renderer.create(<ForumPage />).toJSON()).toMatchSnapshot();
  });
});
