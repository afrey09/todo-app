import React, { useState, useEffect } from 'react';

//create context
export const SettingsContext = React.createContext();

//create provider
const SettingsProvider = ({ children }) => {
  const [pageItems, setPageItems] = useState(3);
  const [showCompleted, setShowCompleted] = useState(false);
  const [sort, setSort] = useState('difficulty');

  const values = {pageItems, setPageItems, showCompleted, setShowCompleted, sort, setSort};

  //save the above state into local storage
  useEffect(() => {
    localStorage.setItem('pageItems', JSON.stringify(pageItems));
    localStorage.setItem('showCompleted', JSON.stringify(showCompleted));
    localStorage.setItem('sort', JSON.stringify(sort));
  }, [pageItems, showCompleted, sort]);
  //load the above state from local storage
  useEffect(() => {
    const localPageItems = localStorage.getItem('pageItems');
    const localShowCompleted = localStorage.getItem('showCompleted');
    const localSort = localStorage.getItem('sort');
    if (localPageItems) {
      setPageItems(JSON.parse(localPageItems));
    }
    if (localShowCompleted) {
      setShowCompleted(JSON.parse(localShowCompleted));
    }
    if (localSort) {
      setSort(JSON.parse(localSort));
    }
  }, []);

  return (
    <SettingsContext.Provider value={values}>
      {children}
    </SettingsContext.Provider>
  )


}

export default SettingsProvider;
