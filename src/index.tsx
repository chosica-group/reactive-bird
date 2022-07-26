/* eslint-disable @typescript-eslint/no-misused-promises */
// import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { history, store } from 'store';
import { App } from './app';

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
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);

startServiceWorker();
