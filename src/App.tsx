import GlobalStyle from "./globalStyle";
import { GamePage } from "./pages/Game";
import { Home } from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GamePreferencesProvider } from "./context/GamePreferencesContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <GamePreferencesProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new-game" element={<GamePage />} />
          </Routes>
        </GamePreferencesProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
