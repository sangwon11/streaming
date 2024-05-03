import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import axios from 'axios';
import MainPage from "./pages/main/MainPage"
import MyPage from "./pages/me/MyPage";
import OptionsPage from "./pages/options/OptionsPage";
import SignInPage from "./pages/sign-in/SignInPage";
import SignUpPage from "./pages/sign-up/SignUpPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/mypage/*" element={<MyPage />} />   
      <Route path="/options/*" element={<OptionsPage />} />
      <Route path="/signin/*" element={<SignInPage />} />
      <Route path="/signup/*" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
