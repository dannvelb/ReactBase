import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./app/index";
import reportWebVitals from "./reportWebVitals";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import common_en from "./translations/en/common.json";
import common_es from "./translations/es/common.json";
import { Provider } from "react-redux";
import { store } from "./app/store/index.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
i18next.init({
  interpolation: { escapeValue: false }, // React already does escaping
  lng: "es",
  resources: {
    en: {
      common: common_en,
    },
    es: {
      common: common_es,
    },
  },
});
root.render(
    <Provider store={store}>
      <I18nextProvider i18n={i18next}>

        <App></App>

      </I18nextProvider>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
