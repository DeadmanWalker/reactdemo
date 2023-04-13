import logo from './logo.svg';
import './App.css';
import LoginHeader from './components/LoginHeader';
import LoginClass from './components/LoginClass';
import Login from './components/Login';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <LoginHeader/>
        <LoginClass/>
        <Login/>
        <Footer/>
        
      </header>
    </div>
  );
}

export default App;
