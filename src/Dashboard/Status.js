import React from 'react'
import './Status.css';

const Status = () => {
  return (
    
    <div className='status'>
        <span className='title'>User Status</span>
    <ul className='List'>
     <li className='wid'>
        <div className='user'>
            <span className='ID'> ID: 1</span>
            <span className='username'>Huzaifa Sarfraz</span>
    

             
        </div>

        <span className='check'>Pending</span>
     </li>

     <br></br>

     <li className='wid'>
        <div className='user'>
            <span className='ID'> ID : 2</span>
            <span className='username'>Salman Shaheer</span>
    

             
        </div>

        <span className='checks'>Approved</span>
     </li>
    </ul>
    
    
    </div>
   
  )
}

export default Status