import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Plan from './pages/Plan';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/plan" element={<Plan />} />
    </Routes>
  );
}

export default App;
