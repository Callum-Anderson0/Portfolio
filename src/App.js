import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Headshot-container">
           <img src="icon.jpeg" className="Headshot" alt="cdog"/>
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload hello changing things for a commit.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
