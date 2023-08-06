import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home Page/Home";
import RegisterPage from "./Pages/Auth/RegisterPage";
import SearchKeyPage from "./Pages/SearchKey/SearchKeyPage";
import BlockChainPage from "./Pages/BlockChain/BlockChainPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="searchkey" element={<SearchKeyPage />} />
        <Route path="blockchain" element={<BlockChainPage />} />
      </Routes>{" "}
    </BrowserRouter>
  );
}

export default App;
