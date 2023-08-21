import React from 'react'
import ReactDom from 'react-dom'

const Portal = ({children: renderComponent, destId}) => {
  return ReactDom.createPortal(
    renderComponent,
    document.getElementById(destId)
  );
}

export default Portal