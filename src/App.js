import React from 'react';
import './App.css';
import Header from './components/layouts/Header';
import Sidebar from './components/layouts/Sidebar';
import AppRouter from './components/routes';
import Footer from './components/layouts/Footer';
import Rightbar from './components/layouts/Rightbar';
function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <div className='appSidebar-router'>
      <Sidebar />
      <AppRouter />
      <Rightbar />
      </div>
      <Footer />
    </div>
  );
}
export default App;