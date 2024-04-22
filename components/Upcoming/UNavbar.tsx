import * as React from 'react'
import { useState } from 'react'


const Links = [
    { label: 'Overview', link: '/' },
    { label: 'Itinerary details', link: '/u' },
    { label: 'Logistics of the trip', link: '/c' },
    { label: 'Price details', link: '/p' },
    { label: 'Price details', link: '/a' },
    { label: 'Gallery', link: '/f' }
]

const UNavbar = () => {
    const [clicked, setClicked] = useState(false)
    return (
        <nav id="bar" className="sticky top-0 flex justify-end bg-gray-100 z-10 w-full">
            <div className=" flex flex-col md:flex-row justify-end md:space-y-0 my-4 space-y-4  text-center text-gray-500">
                
                <ul className="items-center justify-end space-y-8 md:flex md:space-x-4 md:space-y-0 w-full tracking-wide">
                    {Links.map(link => (
                        <li key={link.link} className="text-gray-600 " onClick={() => setClicked(prev => !prev)}>
                            <a className={`mx-3 hover:text-[#28AC95] hover:border-b-2 pb-1 border-b-[#28AC95] ${clicked ? "text-[#28AC95] border-b-2 border-b-[#28AC95]" : ""}`} href={link.link}>{link.label}</a>
                        </li>
                    )
                    )}</ul>
            </div>
        </nav>
    )
}
export default UNavbar