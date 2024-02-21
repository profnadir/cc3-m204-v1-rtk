import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./features/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accueil from "./component/Accueil";
import ListeLivres from "./component/ListeLivres";
import AjouterLivre from "./component/AjouterLivre";
import Menu from "./component/Menu";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Menu/>
        <Routes>
          <Route path="/" element={<Accueil/>}/>
          <Route path="/livres" element={<ListeLivres/>}/>
          <Route path="/add-livre" element={<AjouterLivre/>}/>
        </Routes>

      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
