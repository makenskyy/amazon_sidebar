import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { SidebarContextProvider } from './context-hook/SidebarContext';


ReactDOM.render(
  <SidebarContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </SidebarContextProvider>,
  document.getElementById('root')
);

