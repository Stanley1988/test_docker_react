import React from 'react'

export default function Greet(props) {
 
 let {fname, surname, isAdmin} = props; // Destructure
  return (
    <div>Welcome {fname} {surname} {isAdmin ? 'Admin': 'Guest'}</div>
    // <div>Welcome {props.fname} {props.surname} {props.isAdmin ? 'Admin': 'Guest'}</div>
  )
}
