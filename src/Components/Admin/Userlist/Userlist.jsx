import React from 'react';
import './Userlist.css';


function Userlist() {
  return (
    <>
      <div className='adminHome'>
        <h1>User List</h1>
        <h2>User Data</h2>

        <table className='userListTable'>
          <thead>
            <tr>
              <th>User ID</th>
              <th>Username</th>
              <th>Email</th>
              <th>Remove</th>
              
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Anshad</td>
              <td>anshad1234@gmail.com</td>
              <td><button className='block-btn'>Block</button></td>
              
            </tr>
            <tr>
              <td>2</td>
              <td>Faisal</td>
              <td>faisal7017@gmail.com</td>
              <td><button className='block-btn'>Block</button></td>
            </tr>
            <tr>
              <td>3</td>
              <td>Adiq</td>
              <td>Adiq161@gmail.com</td>
              <td><button className='block-btn'>Block</button></td>
            </tr>
            <tr>
              <td>4</td>
              <td>Nishad</td>
              <td>nishad4037@gmail.com</td>
              <td><button className='block-btn'>Block</button></td>
            </tr>
            <tr>
              <td>5</td>
              <td>Ashik</td>
              <td>ashiksalal@gmail.com</td>
              <td><button className='block-btn'>Block</button></td>
            </tr>
            <tr>
              <td>6</td>
              <td>Sali</td>
              <td>salisadi@gmail.com</td>
              <td><button className='block-btn'>Block</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Userlist