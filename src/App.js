import React from 'react';
import {
  BrowserRouter as Router,
  Switch, 
  Route
} from 'react-router-dom';                          
import './App.css';
import urlForm from './components/urlForm';
import urlResult from './components/urlResult';

// colocar dark theme no futuro

function App() {
  return (
    <Router>
     {/* <div className="App">
    <header>
      <h2>TinyURL</h2>
      <h3>
        <a href="">Github Page</a>
      </h3>
      </header>
    
      <main>
        <urlForm />
      </main>
    </div>  */}

    <Switch>
      <Route path="/">
        <urlForm />
      </Route>
      <Route path="/url-result">
        <urlResult />
      </Route>
    </Switch>
    </Router>
    
  );
}

export default App;
