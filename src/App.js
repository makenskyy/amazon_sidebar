import React, { useState } from 'react';
import { Transition } from 'react-transition-group';
import './App.css';
import Background from './components/Background';
import OpenButton from './components/OpenButton';
import Sidebar from './components/Sidebar';
import { useSidebarContext } from './context-hook/SidebarContext';

// Когда я чекаю, if(state === 'entered'), if(state === 'entering') --> все это приходят фром Transition Component

function App() {
  const [navOpen, setNavOpen] = useState(false);
  const { setSubContainer } = useSidebarContext();

  const openNav = () => {
    setNavOpen(true);
  }

  const closeNav = () => {
    setNavOpen(false);

  }

  const { entryStore } = useSidebarContext();

  return (
    <div className="App">
      <OpenButton click={openNav} />
      <Transition
        in={navOpen}
        timeout={300}
        mountOnEnter
        unmountOnExit>
        {state => {
          if (state === "exited") setSubContainer(false);
          return (
            <>
              <Sidebar state={state} />
              <div className="overlay"
                style={state === "entering" ? { animation: "show .3s forwards" }
                  : state === "entered" ? { opacity: "1" } : { animation: "show .3s backwards reverse" }}
                onClick={closeNav}></div>
              <div className="closeBtn" style={state === "entering" ? { animation: "show .3s forwards" }
                : state === "entered" ? { opacity: "1" } : { animation: "show .3s backwards reverse" }}
                onClick={closeNav}>&times;</div>
            </>
          )
        }}
      </Transition>
      <Background />
    </div>
  );
}

export default App;
