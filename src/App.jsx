import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import FacebookLogin from "./pages/FacebookLogin";
import ShopifyLogin from "./pages/ShopifyLogin";

import FacebookCallback from "./pages/FacebookCallback";
import PrivacyPolicy from "./components/privacy_policy";

function App() {
  return (
    <BrowserRouter>
      <div className="h-full w-full">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/callback" element={<FacebookCallback />} />
          <Route path="/Privacy-Policy" element={<PrivacyPolicy />} />

          <Route path="/facebook-login" element={<FacebookLogin />} />
          <Route path="/shopify-login" element={<ShopifyLogin />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
