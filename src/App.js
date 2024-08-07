import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Callum's Portfolio
      </header>
      <div className="Main-Content">
        <div className="Left-content"> left box
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
        </div>
        <div className="Right-Content"> right box 
          <div className="Scrollable-content">
            <div className="Post" post1> post 1</div>
            <div className="Post" post1> post 2</div>
            <div className="Post" post1> post 3S</div>
            <div className="Post" post1> post 1</div>
            <div className="Post" post1> post 2</div>
            <div className="Post" post1> post 3S</div>
            <div className="Post" post1> post 1</div>
            <div className="Post" post1> post 2</div>
            <div className="Post" post1> post 3S</div>
            <div className="Post" post1> post 1</div>
            <div className="Post" post1> post 2</div>
            <div className="Post" post1> post 3S</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
