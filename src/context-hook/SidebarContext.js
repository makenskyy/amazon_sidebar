import React, { useContext, useState } from 'react';

const SidebarContext = React.createContext();


export const useSidebarContext = () => {
  return useContext(SidebarContext);
}

export const SidebarContextProvider = (props) => {

  //Responsible for opening and closing the sub container
  const [subContainer, setSubContainer] = useState(false);

  //Responsible for storing the subContainers entries
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
