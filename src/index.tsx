import { ConnectedRouter } from 'connected-react-router';
import { hydrate } from 'react-dom';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';
import { history, store } from 'store';
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
