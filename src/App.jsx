import './App.css';
import HomePage from './Pages/HomePage';
import ResultPage from './Pages/ResultPage';
// import List from './component/List';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/result' element={<ResultPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
