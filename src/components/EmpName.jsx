import React from 'react'

function EmpName(props) {
  return (
    <div className={props.classnme}>
        <img src={props.detail.image} alt=""></img>
        <div className='namedesig-div'>
            <p>{props.detail.name}</p>
            <p>{props.detail.designation}</p>
        </div>
    </div>
  )
}

export default EmpName