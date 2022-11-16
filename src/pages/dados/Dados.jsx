import React from 'react'
import HomeSideBar from '../../components/homeSidebar/HomeSideBar'
import TopBar from '../../components/TopBar/TopBar'
import './dados.css'

export default function () {
  return (
    <>
        <TopBar/>
        <HomeSideBar/>
        <div className='dados'>
          dados
        </div>
    </>
  )
}
