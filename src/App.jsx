import { Routes, Route } from 'react-router-dom';
import Phase1 from './components/phase1'; 
import Login from './pages/Login';         
import Vacancies from './pages/Vacancies'; 

function App() {
  return (
    <Routes>
      <Route path="/" element={<Phase1 />} />
      <Route path="/login" element={<Login />} />
      <Route path="/vacancies" element={<Vacancies />} />
    </Routes>
  );
}

export default App;
