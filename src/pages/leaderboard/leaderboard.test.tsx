import { configureStore } from '@reduxjs/toolkit';
import { LeaderboardPage } from 'pages/leaderboard/leaderboard';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { instanceApi } from 'services/instance-api';
import { rootReducer } from 'store/root-reducer';

describe('Leaderboard page render', () => {
  const mockStore = configureStore({
    reducer: rootReducer,
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
