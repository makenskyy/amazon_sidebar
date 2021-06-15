import React, { useState } from 'react';
import { Transition } from 'react-transition-group';
import SidebarRight from './SidebarRight';

function DropDown({ entries }) {

  const [openDropDown, setOpenDropDown] = useState(false);

  let arrowDirection = "fas fa-chevron-down";

  if (!openDropDown) {
    arrowDirection = "fas fa-chevron-down";
  } else {
    arrowDirection = "fas fa-chevron-up";
  }


  return (
    <>
      <Transition
        mountOnEnter
        unmountOnExit
        in={openDropDown}
        timeout={{ enter: 300, exit: 200 }}>
        {state => (
          <div className="sidebarContentDropdownList" style={state === "entering" ? { animation: "dropDown .3s", height: `${3.2 * entries.length}rem` }
            : state === "entered" ? { transform: "scaleY(1)", opacity: "1", height: `${3.2 * entries.length}rem` }
              : { animation: "dropDown .2s", transition: "height 0.2s" }} >
            <div className="hr" />
            {entries.map(entry => (
              <SidebarRight text={entry.title} />
            ))}
          </div>
        )}
      </Transition>
      <div className="sidebarRightDropdown" onClick={() => setOpenDropDown(prevState => !prevState)}>
        <div>See All</div>
        <i className={arrowDirection} />
      </div>
    </>
  );
}

export default DropDown;