
import './App.css';
import logo from './logo.png'
import DictionarySearch from './DictionarySearch'


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} alt="dictionary logo" className=" logo image-fluid" />{" "}
          Dictionary App
        </header>
        <main>
          <DictionarySearch  defaultKeyword="Dictionary"/>
        </main>
        <footer className="footer">
          <small>Coded by Andrea Simmons and is open-sourced!</small>
        </footer>
      </div>
    </div>
  );
}

