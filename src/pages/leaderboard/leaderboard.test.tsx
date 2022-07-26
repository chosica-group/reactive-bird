import { configureStore } from '@reduxjs/toolkit';
import { LeaderboardPage } from 'pages/leaderboard/leaderboard';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { instanceApi } from 'services/instance-api';
import { history } from 'store';
import { rootReducer } from 'store/root-reducer';

describe('Leaderboard page render', () => {
  const mockStore = configureStore({
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    reducer: rootReducer(history),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(instanceApi.middleware),
  });

  it('Leaderboard page renders correctly', () => {
    expect(
      renderer
        .create(
          <Provider store={mockStore}>
            <LeaderboardPage />
          </Provider>,
        )
        .toJSON(),
    ).toMatchSnapshot();
  });
});
