import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Short from './pages/Short';
import Testone from './pages/Testone';
import TestTwo from './pages/TestTwo';
import Testthree from './pages/Testthree';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Short />} />
          <Route path="/test1" element={<Testone />} />
          <Route path="/test2" element={<TestTwo />} />
          <Route path="/test3" element={<Testthree />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
