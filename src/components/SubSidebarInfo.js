import React from 'react';
import { useSidebarContext } from '../context-hook/SidebarContext';
import SidebarRight from './SidebarRight';

function SubSidebarInfo({ state }) {

  const { subContainerEntries, setSubContainer } = useSidebarContext();

  return (
    <div className="sub-container" style={state === "entering" ? { animation: "moveSubContainer .3s forwards" } :
      state === "entered" ? { transform: "translateX(0px)" } : { animation: "moveSubContainer .3s reverse backwards" }}>
      <div className="sub-header" onClick={() => setSubContainer(false)}>
        <i className="fas fa-chevron-left"></i> MAIN MENU
      </div>
      {subContainerEntries.map((subEntry) => (
        <>
          <div className="hr" />
          <div className="sidebarContentHeader">{subEntry.title}</div>
          {subEntry.entries.map(superEntry => (
            // last = true, для того чтобы не показать array->right значок, потому что у меня один и тот же компонент чтоб показать sidebarInfo и subSideBarInfo        
            <SidebarRight text={superEntry.title} last={true} />
          ))}
        </>
      ))}
      <div style={{ minHeight: "3.75rem" }}></div>
    </div>
  );
}

export default SubSidebarInfo;