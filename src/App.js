import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Auth } from "aws-amplify";
import './App.css';

import Home from "./pages/Home";
import Flinn from "./pages/Flinn";
import York from "./pages/York";

function App() {
    Auth.currentSession()
        .then(data => {
            const accessToken = data.getAccessToken().getJwtToken();
            // Use the access token as needed
        })
        .catch(error => {
            // Handle any errors
            console.log(error)
        });

  return (
      <div className="App h-screen">
        <BrowserRouter>
          <Routes>
            <Route exact path='/prep' element={<Home />} />
            <Route exact path='/flinn' element={<Flinn />} />
            <Route exact path='/york' element={<York />} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
