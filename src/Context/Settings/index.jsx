import React, { useState } from 'react';

//create context
export const SettingsContext = React.createContext();

//create provider
const SettingsProvider = ({ children }) => {
  const [pageItems, setPageItems] = useState(3);
  const [showCompleted, setShowCompleted] = useState(false);
  const [sort, setSort] = useState('difficulty');

  const values = {pageItems, setPageItems, showCompleted, setShowCompleted, sort, setSort};

  return (
    <SettingsContext.Provider value={values}>
      {children}
    </SettingsContext.Provider>
  )


}

export default SettingsProvider;
