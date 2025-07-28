import "./wdyr";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { DevTools, loadServer } from "jira-dev-tool";
// 务必在jira-dev-tool后面引入
import "antd/dist/antd.less";
import { AppProviders } from "context";

loadServer(() => {
  const rootElement = document.getElementById("root");
  if (rootElement) {
    // 使用类型断言来解决 React 17 类型兼容性问题
    (ReactDOM.render as any)(
      <React.StrictMode>
        <AppProviders>
          <DevTools />
          <App />
        </AppProviders>
      </React.StrictMode>,
      rootElement
    );
  }
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
