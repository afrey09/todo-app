import React from 'react';
import Header from './Components/Header';
import Todo from './Components/Todo';
import Footer from './Components/Footer';
import Settings from './Components/Settings';
import { Routes, Route } from '@react-router-dom';

export default class App extends React.Component {
  render() {
    return (
      <>
        <Header />

        <Routes>
          <Route path='/' element={<Todo/>} />
          <Route path='/settings' element={<Settings/>}/>
        </Routes> 
        <Footer />
      </>
    );
  }
}
