import React from 'react'

function Header(props) {
  return (
    <div className='heading-main-div'>
        <p>{props.text}</p>
    </div>
  )
}


export default Header