// import React from 'react';
import ReactDOM from 'react-dom/client';
import { AliveScope } from 'react-activation';
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import App from './App.tsx';
import './index.less';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <BrowserRouter>
    <AliveScope>
      <ConfigProvider locale={zhCN}>
        <App />
      </ConfigProvider>
    </AliveScope>
  </BrowserRouter>
  // </React.StrictMode>
)
