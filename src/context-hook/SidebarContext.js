import React, { useContext, useState } from 'react';

const SidebarContext = React.createContext();


export const useSidebarContext = () => {
  return useContext(SidebarContext);
}

export const SidebarContextProvider = (props) => {

  const [subContainer, setSubContainer] = useState(false);

  const [subContainerEntries, setSubContainerEntries] = useState(null);


  const value = {
    subContainer,
    setSubContainer,
    subContainerEntries,
    setSubContainerEntries,
  }

  return (
    <SidebarContext.Provider value={value}>
      {props.children}
    </SidebarContext.Provider>
  );
}
