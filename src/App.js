import "./App.css";
import React from "react";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BlogPage from "./pages/BlogPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <NavBar />
          <HomePage />
          <Footer />
        </Route>
        <Route exact path="/blog">
          <BlogPage />
        </Route>
        {/* <Route exact path="" */}
      </Router>
    </div>
  );
}

export default App;
