import './index.css';
import Home from './component/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from './Profile Page/Profile';
import AllCompliance from './Compliance page/AllCompliance';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/compliance' element={<AllCompliance/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
