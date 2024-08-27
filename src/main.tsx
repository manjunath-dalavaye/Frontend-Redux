// import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container); // Create the root using the container
  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
}
