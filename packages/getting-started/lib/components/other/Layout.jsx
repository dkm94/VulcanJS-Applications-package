import React from 'react';

const Layout = ({ children }) => (
  <div className="layout">
    <div className="main-content">{children}</div>
  </div>
);

//replaceComponent('Layout', Layout);
export default Layout;
