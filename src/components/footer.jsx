import React from 'react'

export default function Footer() {
  return (
    <footer className='bg-theme pt-7 pb-5'>
      <div className='nike-container text-slate-200'>
        <p className='text-sm text-center'>
          Created by Mr. <span className='font-semibold'>| BekDev |</span> {new Date().getFullYear()} ©️ All Rights Reserved!
        </p>
      </div>
    </footer>
  )
}
