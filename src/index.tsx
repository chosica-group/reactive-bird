import { ConnectedRouter } from 'connected-react-router';
import { hydrate } from 'react-dom';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';
import { configureInitialStore, history } from 'store';
import { App } from './app';

const HotBundle = hot(App);

function startServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', async () => {
      try {
        const req = await navigator.serviceWorker.register('/sw.js');
        console.log(req, 'register sw');
      } catch (e) {
        console.log(e, 'error sw');
      }
    });
  }
}

declare global {
  interface Window {
    __PRELOADED_STATE__?: object;
  }
}

// eslint-disable-next-line no-underscore-dangle
const state = window.__PRELOADED_STATE__;
console.log(state, 'state');
// eslint-disable-next-line no-underscore-dangle
delete window.__PRELOADED_STATE__;
const { store } = configureInitialStore(state || {});
hydrate(
  <Provider store={store}>
    {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
    <ConnectedRouter history={history}>
      <HotBundle />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);

startServiceWorker();
