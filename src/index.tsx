/* eslint-disable @typescript-eslint/no-misused-promises */
// import ReactDOM from 'react-dom';
import { hydrate } from 'react-dom';
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

hydrate(<App />, document.getElementById('root'));

startServiceWorker();
