import React, { useState } from 'react';

const Layout = ({children}) => {
  
  return(
    <div className="layout">
      <div className="main-content">{children}</div>
    </div>
  )
}

//replaceComponent('Layout', Layout);
export default Layout;
