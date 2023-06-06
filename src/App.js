import Compliance from './Compliance page/Compliance';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Compliance/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
