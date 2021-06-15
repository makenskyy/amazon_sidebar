import React from 'react';
import { useSidebarContext } from '../context-hook/SidebarContext';

function SidebarRow({ entries, last, text }) {

  const { setSubContainer, setSubContainerEntries } = useSidebarContext();

  const openRight = () => {
    setSubContainer(true);
    setSubContainerEntries(entries);
  }

  return (
    <>
      <div className="sidebarRight" onClick={() => (entries && openRight())}>
        <div>{text}</div>
        {!last ? <i className="fas fa-chevron-right"></i> : null}
      </div>
    </>
  );
}

export default SidebarRow;