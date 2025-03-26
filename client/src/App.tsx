import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import MenuTop from './layout/MenuTop';
import PhpConverter from './modules/converter/components/PhpConverter';
// import Tools from './tmp/tools';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <MenuTop />
          <Routes>
              <Route path="/converter" element={<PhpConverter />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
