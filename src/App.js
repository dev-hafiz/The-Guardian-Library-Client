import './App.css';
import Home from './Pages/Home/Home/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import StoreBook from './StoreBook/StoreBook/StoreBook';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Routes>
       <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/storebook" element={<StoreBook />} />
    </Routes>
  </BrowserRouter>,
    </div>
  );
}

export default App;
