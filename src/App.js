import "./App.scss";
import Navbar from "./Components/Routes/navbar";
import Home from "./Components/Home/home";
import Auto from "./Components/Auto/auto";
import Categorydetails from "./Components/CategoryDetails/categorydetails";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import { Globalstate } from "./Globalstate.js";
import { Selectedcar } from "./Globalselectedcar";
import { Cartstate } from "./CartContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Offline, Online } from "react-detect-offline";
import Off from "./Components/OFFLINE/offline";

function App() {
  return (
    <div className="App">
      <div>
        <Online>
          <Cartstate>
            <Selectedcar>
              <Globalstate>
                <Router>
                  <Navbar />
                  <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/store" element={<Auto />} />
                    <Route path="/store/:id" element={<Categorydetails />} />
                    <Route path="/product/:id" element={<ProductDetails />} />
                  </Routes>
                </Router>
              </Globalstate>
            </Selectedcar>
          </Cartstate>
        </Online>
        <Offline>
          <Off />
        </Offline>
      </div>
      ;
    </div>
  );
}

export default App;
