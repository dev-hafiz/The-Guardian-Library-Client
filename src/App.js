import "./App.css";
import Home from "./Pages/Home/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StoreBook from "./StoreBook/StoreBook/StoreBook";
import Login from "./Login/Login/Login";
import Register from "./Login/Register/Register";
import AuthProvider from "./context/AuthProvider/AuthProvider";
import PrivateRoute from "./Login/PrivateRoute/PrivateRoute";
import DashBoard from "./Pages/Home/DashBoard/DashBoard/DashBoard";

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/storebook" element={
          <PrivateRoute>
          <StoreBook />
          </PrivateRoute>
          } />
          <Route path="/dashboard" element={
          <PrivateRoute>
          <DashBoard/>
          </PrivateRoute>}>
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
      </AuthProvider>
      
    </div>
  );
}

export default App;
