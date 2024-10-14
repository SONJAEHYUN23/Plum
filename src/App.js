import './App.css';
import Header from './components/Header';
import Main from './pages/MainPage/Main';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Drawer from './components/Drawer';
import { useState } from 'react';

function App() {
  const [isLeftDrawerOpen, setIsLeftDrawerOpen] = useState(false);
  const [isRightDrawerOpen, setIsRightDrawerOpen] = useState(false);


  return (
    <div className="layout">
      <Router>
        <Header
          toggleLeftDrawer={() => setIsLeftDrawerOpen(!isLeftDrawerOpen)}
          toggleRightDrawer={() => setIsRightDrawerOpen(!isRightDrawerOpen)}
        />
        <div className="content-wrapper">
          <Drawer open={isLeftDrawerOpen} side="left" className="drawer-left" />
          <Routes>
            <Route path="main" element={<Main />} />
            <Route path="/" element={<Main />} />
          </Routes>
          <Drawer open={isRightDrawerOpen} side="right" className="drawer-right" />
        </div>
      </Router>
    </div>
  );
}

export default App;
