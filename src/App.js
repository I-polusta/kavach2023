import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home Page/Home";
import RegisterPage from "./Pages/Auth/RegisterPage";
import SearchKeyPage from "./Pages/SearchKey/SearchKeyPage";
import BlockChainPage from "./Pages/BlockChain/BlockChainPage";
import TransactionPage from "./Pages/Transaction/TransactionPage";
import DashPage from "./Pages/Dashboard/DashPage";
import WatchlistPage from "./Pages/watchlist/WatchlistPage";
import UpdateWatchlistPage from "./Pages/watchlist/UpdateWatchlistPage";
import DemixerPage from "./Pages/Demixer/DemixerPage";
import DehopperPage from "./Pages/Dehopper/DehopperPage";
import OTPPage from "./Pages/Auth/OtpPage";
import ReportPage from "./Pages/Report/ReportPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="searchkey" element={<SearchKeyPage />} />
        <Route path="otp" element={< OTPPage />} />
        <Route path="blockchain" element={<BlockChainPage />} />
        <Route path="transaction" element={<TransactionPage />} />
        <Route path="dashboard" element={<DashPage />} />
        <Route path="watchlist" element={<WatchlistPage />} />
        <Route path="updateList" element={<UpdateWatchlistPage />} />
        <Route path="demixer" element={<DemixerPage />} />
        <Route path="dehopper" element={<DehopperPage />} />
        <Route path="report" element={<ReportPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
