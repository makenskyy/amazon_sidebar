import React, { useState } from 'react';
import DropDown from './DropDown';
import SidebarRight from './SidebarRight';

import data from '../data/data.json';

function SidebarInfo({ state }) {
  const [dropList, setDropList] = useState(null);

  return (
    <div className="sidebarContainer" style={state === "exiting" ? { animation: "moveMainContainer .3s forwards" } :
      state === "entering" ? { animation: "moveMainContainer .3s reverse backwards" } : null} >

      {data && (
        data.map((entry, index) => {
          return (
            <>
              <div className="sidebarContentHeader">{entry.title}</div>
              {
                entry.entries.map((subEntry, index) => {
                  if (subEntry.type) {
                    if (!dropList) setDropList(index);
                    return <DropDown entries={entry.entries.slice(index + 1)} />
                  } else if (dropList && index < dropList) {
                    return (!entry.type.rows ? <a href="#">
                      <div className="sidebarContent">{subEntry.title}</div></a>
                      : <SidebarRight text={subEntry.title} entries={subEntry.entries} />)
                  }
                })
              }
              {index !== data.length - 1 && <div className="hr" /> /* тут добавляем серую штуку */}
            </>
          )
        }
        )
      )}
      <div style={{ minHeight: "3.75rem" }}></div>
    </div>
  );
}

export default SidebarInfo;