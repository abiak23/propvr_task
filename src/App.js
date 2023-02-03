import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import PhotoDetail from "./components/photoDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/photo/:photoid" element={<PhotoDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
