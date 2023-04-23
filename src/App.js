import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';

import Home from "./pages/Home";
import Flinn from "./pages/Flinn";

function App() {
  return (
      <div className="App h-screen">
        <BrowserRouter>
          <Routes>
            <Route exact path='/prep' element={<Home />} />
            <Route exact path='/flinn' element={<Flinn />} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
