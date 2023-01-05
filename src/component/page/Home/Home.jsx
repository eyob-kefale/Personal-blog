import React from 'react'
import Header from '../../Header/Header'
import './home.css'
import SideBar from '../../sideBar/sideBar'
import Posts from '../../Posts/posts'

export default function Home() {
  return (
    <>
    <Header/>
    <div className="home">
    <Posts/>
    <SideBar/>
    </div>
    </>
  )
}
