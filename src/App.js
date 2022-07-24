
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
          <DictionarySearch defaultKeyword="Dictionary" />
        </main>
        <footer className="footer">
          <small>
            <strong>
              Coded by Andrea Simmons and is{" "}
              <a href="https://github.com/Ndrea3/React-Dictionary-App.git" rel="noreferrer" target="_blank">
                open-sourced!
              </a>
            </strong>
          </small>
        </footer>
      </div>
    </div>
  );
}

