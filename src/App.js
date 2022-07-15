
import './App.css';
import dictionary from './dictionary.png'

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={dictionary} alt="dictionary" className=" logo image-fluid"/>{" "}
        Dictionary App
      </header>
    </div>
  );
}

