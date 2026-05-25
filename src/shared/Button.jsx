import React from 'react'

function Button({children, type = "submit", variant="primary", isDisable = false}) {
  return (
    <button type={type} disabled={isDisable}>
      {children}
    </button>
  )
}

export default Button
