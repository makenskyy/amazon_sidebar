import React from 'react'

const OpenButton = (props) => {
  return (
    <div className="open-btn" onClick={props.click}>
      <i className="fas fa-bars" />
    </div>
  )
}

export default OpenButton;