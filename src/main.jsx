import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme";
import Home from "./pages/Home/Home.jsx";
import Lobby from "./pages/Lobby/Lobby.jsx";
import { Game } from "./pages/Game/Game.jsx";
import LobbyProvider from "./contexts/LobbyContext/LobbyContext";

import "./index.css";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <LobbyProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/game/:game_name" element={<Game />} />
              <Route path="/lobby" element={<Lobby />} />
              <Route path="/lobby/:lobby_name" element={<Lobby />} />
            </Routes>
          </LobbyProvider>
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
