import React from "react";
import ReactDOM from "react-dom/client";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const GlobalStyle = createGlobalStyle`
  ${reset}

  *{
    margin: 0;
    padding: 0;
  }
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap');
  
  body {
    font-family: 'Noto Sans KR', sans-serif;
  }
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
