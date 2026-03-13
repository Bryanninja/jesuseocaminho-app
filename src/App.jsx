import { Route, Routes } from 'react-router-dom';

import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Plan from './pages/Plan';
import WrongPath from './pages/WrongPath';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/*" element={<WrongPath />} />
      </Routes>
    </>
  );
}

export default App;
