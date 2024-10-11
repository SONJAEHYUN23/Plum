import './App.css';
import Header from './components/Header';
import Main from "./pages/MainPage/Main";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
         <Header /> 
      <Routes>
     <Route path="main" element={<Main />} />
     </Routes>
    </Router>
  );
}

export default App;
