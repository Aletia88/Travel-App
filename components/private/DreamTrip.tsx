import * as React from 'react'
import Image from 'next/image'


// import hero1 from '../../public/images/hero1.jpg'
// import hero2 from '../../public/images/hero2.jpg'
// import hero3 from '../../public/images/hero3.jpg'

const Details = [
  { Image: "https://images.unsplash.com/photo-1663765970236-f2acfde22237?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: 'Tailor made trips', value: 'you looking for comfort, speed and confidence to organize your holidays? The logistics team of Chasing the Wind will organize the trip of your life where you choose everything. Tell us where you want to travel, when, how you like to travel, and your requirements. We take care of organizing the trip for you and yours so you can enjoy it for free (minimum group of 2 people).', id: '1' },
  { Image: "https://images.unsplash.com/photo-1663765970236-f2acfde22237?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: 'Tailor made trips', value: 'you looking for comfort, speed and confidence to organize your holidays? The logistics team of Chasing the Wind will organize the trip of your life where you choose everything. Tell us where you want to travel, when, how you like to travel, and your requirements. We take care of organizing the trip for you and yours so you can enjoy it for free (minimum group of 2 people).', id: '2' },
  { Image: "https://images.unsplash.com/photo-1663765970236-f2acfde22237?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: 'Tailor made trips', value: 'you looking for comfort, speed and confidence to organize your holidays? The logistics team of Chasing the Wind will organize the trip of your life where you choose everything. Tell us where you want to travel, when, how you like to travel, and your requirements. We take care of organizing the trip for you and yours so you can enjoy it for free (minimum group of 2 people).', id: '3' },

]


const DreamTrip = () => {
  return (
    <div className='flex flex-col m-auto pt-28'>
      <h1 className='m-auto font-bold text-4xl pb-4'>We organize your dream trip</h1>
      <p className='m-auto font-light text-md '>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <p className='m-auto font-light text-md '> Quam duis vitae curabitur amet, fermentum lorem. </p>
      <div className='flex flex-col w-[80%] gap-4 m-auto md:flex-row'>
        {
          Details.map(detail => (
            <div className="flex flex-col mx-auto mt-11  transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
              <div className=''>
                <Image key={detail.id} className="h-64 w-full object-cover object-center" 
                width={500}
                height={500}
              quality={100}
              src={detail.Image} alt="Product Image" />

              </div>
              <div className="flex flex-col p-4 bg-zinc-300">
                <h2 className="mb-2 text-md font-medium  dark:text-white text-gray-900">{detail.title}</h2>
                <p className="mb-2 text-base text-sm dark:text-gray-300 text-gray-700">{detail.value}</p>

              </div>
            </div>))
        }
      </div>
    </div>
  )
}
export default DreamTrip