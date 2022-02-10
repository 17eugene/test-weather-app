import { BrowserRouter, Routes, Route } from "react-router-dom";

import CardsView from "./views/CardsView/CardsView";
import NotFoundView from "./views/NotFoundView/NotFoundView";
import CardDetailsView from "./views/CardDetailsView/CardDetailsView";
import Container from "./components/Container/Container";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Container>
          <Routes>
            <Route exact path="/" element={<CardsView />} />
            <Route path="/:name" element={<CardDetailsView />} />
            <Route path="*" element={<NotFoundView />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
