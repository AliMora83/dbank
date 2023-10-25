import React from 'react'
import NavBar from './NavBar'
import styles from '../styles/Home.module.css';


export default function Contact() {
  return (
    <div className='md:w-[50%] w-[90%] mx-auto'>
      <NavBar/>
      <p className='p-2 text-center rounded-lg bg-slate-100'>Contact Page</p>
    </div>
  )
}
