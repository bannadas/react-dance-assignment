import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './components/Home/Home'
import About from './components/About/About';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import Error from './Error/Error';


function App() {
  return (
    <div className="App">
      
     <Router>
       <Switch>
         <Route exact path="/">
            <Home></Home>
         </Route>
         <Route exact path="/home">
        <Home></Home>
         </Route>
         <Route exact path="/about">
        <About></About>
         </Route>
         <Route exact path="/services">
        <Services></Services>
         </Route>
         <Route exact path="/contact">
        <Contact></Contact>
         </Route>
         <Route path="*">
        <Error></Error>
         </Route>
       </Switch>
     </Router>
      
    </div>
  );
}

export default App;
