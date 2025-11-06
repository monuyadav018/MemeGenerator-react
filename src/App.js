import './App.css';
import {Routes,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/Home';

function App() {
  return (
    <div className="container">
    <h1>MemeGenerator </h1>
    <Routes>
      <Route path="/" element={<HomePage/>} />
    </Routes>
    </div>

  );
}

export default App;
