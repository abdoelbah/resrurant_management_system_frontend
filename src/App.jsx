import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Auth from './views/auth/Auth';
import Dashboard from './views/dashboard/Dashboard';
import './App.css';
import { useRecoilValue  } from 'recoil';
import { userState } from './atoms/userAtom';


function App() {
  const storedUser  = useRecoilValue(userState)
console.log("user in app",storedUser)
  return (

      <BrowserRouter>
        <Routes>
          <Route path='/auth' element={storedUser ? <Dashboard /> : <Auth />} />
          <Route path='/*' element={storedUser ? <Dashboard /> : <Auth />} />
        </Routes>
      </BrowserRouter>

  );
}

export default App;
