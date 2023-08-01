import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home Page/Home";
import RegisterPage from "./Pages/Auth/RegisterPage";
import SearchKeyPage from "./Pages/SearchKey/SearchKeyPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="searchkey" element={<SearchKeyPage />} />
      </Routes>{" "}
    </BrowserRouter>
  );
}

export default App;
