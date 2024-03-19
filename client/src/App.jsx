import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {FilePage} from './pages/File.jsx';

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