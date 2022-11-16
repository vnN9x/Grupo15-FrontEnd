import './home.css'
//import Header from '../../components/header/Header'
import React from 'react'
import TopBar from '../../components/TopBar/TopBar';
import HomeSideBar from '../../components/homeSidebar/HomeSideBar'
import Header from '../../components/header/Header';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom'

export default function Home() {
  const [locations, setLocations] = useState([]);
  const {search} = useLocation();

  useEffect(() =>{
    const fetchLocations = async ()=>{
      const res = await axios.get("/place"+search)
      console.log(res)
      setLocations(res.data)
    }
    fetchLocations()
  return (
    <>
        <div className='home'>
          <TopBar/>
          <HomeSideBar/>
          <Header/>
        </div>
    </>
  )
}
