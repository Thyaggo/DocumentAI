import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {FilePage} from './pages/File.jsx';
import { MyProvider } from './Context.jsx';
import LoginPage from './pages/Login.jsx';
import PrivateRoutes from './utils/PrivateRoutes.jsx';
import Signup from './pages/Signup.jsx';
import Test from './pages/Test.jsx';

function App() {
  return (
    <BrowserRouter>
      <MyProvider>
        <Routes>
          <Route element={<PrivateRoutes/>}>
            <Route path="/" element={<FilePage />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/test" element={<Test/>} />
        </Routes>
      </MyProvider>
    </BrowserRouter>
  );
}

export default App;