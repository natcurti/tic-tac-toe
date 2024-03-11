import GlobalStyle from "./globalStyle";
import { GamePage } from "./pages/Game";
import { Home } from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GamePreferencesProvider } from "./context/GamePreferencesContext";
import { WhoIsTurnProvider } from "./context/WhoIsTurnContext";
import { MovesContextProvider } from "./context/MovesContext";
import { VictoryContextProvider } from "./context/VictoryContext";
import { ComputerTurnProvider } from "./context/ComputerTurnContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <GamePreferencesProvider>
          <WhoIsTurnProvider>
            <MovesContextProvider>
              <VictoryContextProvider>
                <ComputerTurnProvider>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/new-game" element={<GamePage />} />
                  </Routes>
                </ComputerTurnProvider>
              </VictoryContextProvider>
            </MovesContextProvider>
          </WhoIsTurnProvider>
        </GamePreferencesProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
