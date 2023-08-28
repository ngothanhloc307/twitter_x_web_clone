import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './Components/HomePage/Homepage';
import Authentication from './Components/Authentication/Authentication';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/*' element={true ? <Homepage /> : <Authentication />}></Route>
      </Routes>
    </div>
  );
}

export default App;
