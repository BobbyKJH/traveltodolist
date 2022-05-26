import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import store from "./store/store";
import ContinentPage from "./pages/ContinentPage";
import ExchangePage from "./pages/ExchangePage";
import Home from "./pages/Home";
import MapPage from "./pages/MapPage";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Routes>
          {/* 여행 */}
          <Route path="/" element={<Home />} />
          {/* 계획 */}
          <Route path="/" element={<Home />} />
          <Route path="continent" element={<ContinentPage />} />
          {/* 지도 */}
          <Route path="/map" element={<MapPage />} />
          {/* 환전 */}
          <Route path="/exchange" element={<ExchangePage />} />
        </Routes>
      </Provider>
    </Router>
  );
}

export default App;
