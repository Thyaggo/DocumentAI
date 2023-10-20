import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {FilePage} from './pages/File.jsx';
import LoginPage from './pages/Login.jsx';
import PrivateRoutes from './utils/PrivateRoutes.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoutes/>}>
          <Route path="/" element={<FilePage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;