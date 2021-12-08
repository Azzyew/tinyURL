import React from 'react';                       
import UrlGetForm from './components/UrlForm';
import './Global.css';

// colocar dark theme no futuro

function App() {
  return (
    <div className="App">
      <header>
        <h2>TinyURL</h2>
        <h3>
          <a href="https://github.com/Azzyew/tinyURL">Github Page</a>
        </h3>
      </header>
      
      <main>
        <UrlGetForm />
      </main>
    </div>
  );
}

export default App;
