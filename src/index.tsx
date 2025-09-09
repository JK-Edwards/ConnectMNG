import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// Import polyfills and locale data
import '@formatjs/intl-numberformat/polyfill-force';
import '@formatjs/intl-numberformat/locale-data/mn';
import '@formatjs/intl-datetimeformat/polyfill-force';
import '@formatjs/intl-datetimeformat/locale-data/mn';
import '@formatjs/intl-relativetimeformat/polyfill-force';
import '@formatjs/intl-relativetimeformat/locale-data/mn';

// Diagnostic logging
try {
  console.log('Intl.NumberFormat supported:', !!global.Intl?.NumberFormat);
  console.log('Mongolian NumberFormat locale data loaded:', !!(global.Intl?.NumberFormat as any)?.__localeData__?.mn);
  console.log('Intl.DateTimeFormat supported:', !!global.Intl?.DateTimeFormat);
  console.log('Mongolian DateTimeFormat locale data loaded:', !!(global.Intl?.DateTimeFormat as any)?.__localeData__?.mn);
  console.log('Intl.RelativeTimeFormat supported:', !!global.Intl?.RelativeTimeFormat);
  console.log('Mongolian RelativeTimeFormat locale data loaded:', !!(global.Intl?.RelativeTimeFormat as any)?.__localeData__?.mn);
} catch (error) {
  console.error('Error checking Intl polyfills:', error);
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);