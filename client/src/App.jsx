import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {FilePage} from './pages/File.jsx';
import { Navegation } from './components/Navegation.jsx';

function App() {
  return (
    <BrowserRouter>
      <Navegation />
      <Routes>
        <Route path="/file" element={<FilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;