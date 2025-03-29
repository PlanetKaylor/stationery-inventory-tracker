import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import HomePage from './pages/HomePage';

export default function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    );
}


