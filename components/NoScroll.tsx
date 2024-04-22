import React from 'react'
import { TripCard } from './TripCard'

function NoScroll() {
  return (
    <div className='scroll w-full h-screen z-20 no-scrollbar object-cover sticky overflow-scroll'>
        {/* <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1421&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}
        <div className='w-full bg-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, blanditiis harum quam accusantium porro iusto alias! Vel ipsam, quibusdam non consectetur dicta atque necessitatibus, odit laborum debitis, vero incidunt pariatur?</div>
        <div className=" ">
            <TripCard />
            <TripCard />
            <TripCard />

        </div>
    </div>
  )
}

export default NoScroll