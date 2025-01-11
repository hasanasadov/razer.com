import React from 'react'
import "./AdminSidebar.scss"
import { Link } from 'react-router-dom'
function AdminSidebar() {
  return (
<>
<section className='sidebar__box'>  
<h1>Razer</h1>
<div className='sidebar__link__box'>
    <ul>
        <li><Link to=''>Dashboard</Link></li>
        <li><Link to='allproduct'>All Product</Link></li>
        <li><Link to='newproduct'>New Product</Link></li>
        <li><Link to='user'>Users</Link></li>
        <li><Link to='settings'>Settings</Link></li>
    </ul>
</div>
</section>
</> 
  ) 
}

export default AdminSidebar
