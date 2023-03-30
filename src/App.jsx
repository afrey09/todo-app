import React from 'react';
import Header from './Components/Header';
import Todo from './Components/Todo';
import Footer from './Components/Footer';
import SettingsForm from './Components/SettingsForm';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

export default class App extends React.Component {
  render() {
    return (
      <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Todo />} />
          <Route path='/settings' element={<SettingsForm/>}/>
        </Routes> 
        <Footer />
      </BrowserRouter>
      </>
    );
  }
}
         
