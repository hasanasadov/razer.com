import React from 'react'
import Header from '../../../Layout/Admin/Header/Header'
// import Footer from '../../../Layout/Admin/Footer/Footer'
import {Outlet} from 'react-router-dom'
import AdminSidebar from '../AdminSidebar/AdminSidebar'

const AdminRoot = () => {
  return (
    <div>
      
       <AdminSidebar/> 
        <Header/>
        <Outlet/>
        {/* <Footer/> */}
    </div>
  )
}

export default AdminRoot
