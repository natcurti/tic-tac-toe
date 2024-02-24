import GlobalStyle from "./globalStyle";
import { GamePage } from "./pages/Game";
import { Home } from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-game" element={<GamePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
