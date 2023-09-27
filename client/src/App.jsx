import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {FilePage} from './pages/File.jsx';
import { Navegation } from './components/Navegation.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;