import { Routes, Route } from 'react-router-dom';
import Phase1 from './components/phase1'; 
import Login from './pages/Login';         
import Vacancies from './pages/Vacancies'; 
import Signup from './pages/Signup';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Phase1 />} />
      <Route path="/login" element={<Login />} />
      <Route path="/vacancies" element={<Vacancies />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
