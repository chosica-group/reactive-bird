/* eslint-disable @typescript-eslint/no-misused-promises */
import ReactDOM from 'react-dom';
import { App } from './app';

window.addEventListener('load', async () => {
  if ('serviceWorker' in navigator) {
    // TO DO провериять что продакшн
    try {
      const req = await navigator.serviceWorker.register('/sw.js');
      console.log(req, 'register sw');
    } catch (e) {
      console.log(e, 'error sw');
    }
  }
});

ReactDOM.render(<App />, document.getElementById('root'));
