import React from 'react';
import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './components/App';
import { ConfigProvider } from 'antd';
import es_ES from 'antd/lib/locale-provider/es_ES';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');

if (rootElement) {
  render(
    <HashRouter>
      <ConfigProvider locale={es_ES}>
        <App />
      </ConfigProvider>
    </HashRouter>,
    rootElement
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
