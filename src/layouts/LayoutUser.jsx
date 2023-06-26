import React from 'react'
import Header2 from '../components/Header2'
import Sidebar from '../components/SideBar'
import { Outlet } from "react-router-dom";
import {
    RiNotification3Line,
    RiArrowDownSLine,
    RiSettings3Line,
    RiLogoutCircleRLine,
    RiThumbUpLine,
    RiChat3Line,
  } from "react-icons/ri";
 
const LayoutUser = () => {
  return (
    <div style={styles.container}>
        <div className="min-h-screen grid grid-cols-1 xl:grid-cols-6">
            <Sidebar />
            <div className="xl:col-span-5"> 
                
                <div className="h-[7vh] md:h-[10vh] border-b border-secondary-100 p-8 flex items-center justify-end">
                <Header2/>

                </div>

                <div className="h-[90vh] overflow-y-scroll p-8">
                <Outlet />
                </div>
            </div>
        </div>
    </div>
  )
}

const styles = {
  container: {
    backgroundColor: '#FFFFF0',
  },
};

export default LayoutUser