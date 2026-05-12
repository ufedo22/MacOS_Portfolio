import useWindowStore from '#store/window'
import React from 'react'

const WindowControls = ({target}) => {
    const {closeWindows} = useWindowStore()
  return (
    <div id="window-controls">
      <div className="close" onClick={() => closeWindows(target)}></div>
      <div className="minimize" />
      <div className="maximize" />
    </div>
  );
}

export default WindowControls 