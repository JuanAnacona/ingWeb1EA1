// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../../restaurant-app/src/pages/Home";
import Search from "../../restaurant-app/src/pages/Search";
import NewRestaurant from "../../restaurant-app/src/pages/NewRestaurant";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buscar" element={<Search />} />
        <Route path="/nuevo" element={<NewRestaurant />} />
      </Routes>
    </Router>
  );
}

export default App;
