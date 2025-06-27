import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header'
import './Layout.css'

function Layout() {
  return (
    <div className='layout'>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;