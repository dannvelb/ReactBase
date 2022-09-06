import React from "react";
import { createRoot } from "react-dom/client";
import "./assets/bootstrap.scss";
import { SnackbarProvider, VariantType, useSnackbar } from 'notistack';
import "./index.scss";
import App from "./app/app.index";
//import reportWebVitals from "./reportWebVitals";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import common_en from "./translations/en.json";
import common_es from "./translations/es.json";
import { Provider } from "react-redux";
import { store } from "./app/store/store.index";

const rootElement = document.getElementById("root") as Element;

const root = createRoot(rootElement);

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
      <SnackbarProvider maxSnack={10} autoHideDuration={1000}>
        <App></App>
      </SnackbarProvider>
    </I18nextProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
