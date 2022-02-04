import { BrowserRouter, Routes, Route } from "react-router-dom";

import CardsView from "./views/CardsView/CardsView";
import NotFoundView from "./views/NotFoundView/NotFoundView";
import CardDetails from "./views/CardDetails/CardDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<CardsView />} />
          <Route path="/:name" element={<CardDetails />} />
          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
