import {BrowserRouter, Route, Routes, redirect} from 'react-router-dom';
import { useContext } from 'react';
import {FilePage} from './pages/File.jsx';
import LoginPage from './pages/Login.jsx';

function App() {
  const { tokenAuth } = useContext(MyContext);

  return (
    <BrowserRouter>
      <Routes>
        {tokenAuth ? (<Route path="/" element={<FilePage />} />) : (redirect('/login'))}
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;