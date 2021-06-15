import React from 'react';
import SidebarInfo from './SidebarInfo';
import SubSidebarInfo from './SubSidebarInfo';
import { Transition } from 'react-transition-group';
import { useSidebarContext } from '../context-hook/SidebarContext';

function Sidenav({ state }) {

  const { subContainer, setSubContainer } = useSidebarContext();


  return (
    <div className="sidebar" style={state === "entering" ? { animation: `moveSideBar .3s forwards` } : state === "entered" ?
      { transform: `translateX(0px)` } : { animation: `moveSideBar .3s reverse backwards` }}>
      <div className="sidebarHeader">
        <i className="fas fa-user-circle"></i> Hello, Sign In
      </div>
      <Transition
        in={!subContainer}
        timeout={300}
        unmountOnExit>
        {state => (
          <SidebarInfo state={state} />
        )}
      </Transition>
      <Transition
        in={subContainer}
        timeout={300}
        unmountOnExit>
        {state => (
          <SubSidebarInfo state={state} setSubContainer={setSubContainer} />
        )}
      </Transition>
    </div>
  );
}

export default Sidenav;