import React, { useState, useEffect } from 'react';

//create context
export const SettingsContext = React.createContext();

//create provider
const SettingsProvider = ({ children }) => {
  const [pageItems, setPageItems] = useState(3);
  const [showComplete, setShowComplete] = useState(false);
  const [sort, setSort] = useState('difficulty');

  const saveLocally = () => {
    localStorage.setItem('todo', JSON.stringify({pageItems, showComplete, sort}))
  }

  const values = {pageItems, setPageItems, showComplete, setShowComplete, sort, setSort, saveLocally};

  //save the above state into local storage
  useEffect(() => {
    localStorage.setItem('pageItems', JSON.stringify(pageItems));
    localStorage.setItem('showCompleted', JSON.stringify(showComplete));
    localStorage.setItem('sort', JSON.stringify(sort));
  }, [pageItems, showComplete, sort]);
  //load the above state from local storage
  useEffect(() => {
    const localPageItems = localStorage.getItem('pageItems');
    const localShowComplete = localStorage.getItem('showCompleted');
    const localSort = localStorage.getItem('sort');
    if (localPageItems) {
      setPageItems(JSON.parse(localPageItems));
    }
    if (localShowComplete) {
      setShowComplete(JSON.parse(localShowComplete));
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
