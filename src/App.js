import './App.css';
import { BrowserRouter as Router } from'react-router-dom';
import { Routes, Route } from'react-router-dom';
import Card from './Components/Card/Card';
import KissGif from './Components/Gif/KissGif';

function App() {
  return (<>
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<KissGif />} />
          <Route path="/Card" element={<Card />} />
        </Routes>
      </Router>
    </div>
  </>);
}

export default App;
