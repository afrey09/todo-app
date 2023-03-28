import React from 'react';
import Header from './Components/Header';
import Todo from './Components/Todo';
import Footer from './Components/Footer';

export default class App extends React.Component {
  render() {
    return (
      <>
      <Header />
      <Todo />
      <Footer />
      </>
    );
  }
}
