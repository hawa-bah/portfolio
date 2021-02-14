import "./App.css";
import react from "react";
import { BrowserRouter as Router, Route } from "react-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      {/* <Router>
        <Route exact path="./"> */}
      <NavBar />
      <HomePage />
      <Footer />
      {/* </Route>
      </Router> */}
    </div>
  );
}

export default App;
