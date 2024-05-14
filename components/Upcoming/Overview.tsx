import * as React from "react";
import map from "../../images/map.png";
import { Border } from "../Border";

// const Links = [
//     { label: 'Overview', link: '/' },
//     { label: 'Itinerary details', link: '/u' },
//     { label: 'Logistics of the trip', link: '/c' },
//     { label: 'Price details', link: '/p' },
//     { label: 'Price details', link: '/a' },
//     { label: 'Gallery', link: '/f' }
// ]

const Overview = (prop: {days: number,
    price: number,
    journey: any,
    date: any,
    description: any,
    title: string,
    map: string}) => {
  const Fields = [
      { name: "Price", value: `${prop.price}` },
    { name: "Days", value: prop.days },
    { name: "Journey", value: prop.journey },
    { name: "Time Of Year", value: prop.date },
  ];

  return (
    <div className="flex max-w-full space-x-4 px-5 py-10 justify-center bg-white">
      <div className="w-[15%] bg-[#f5f5f5] flex flex-col h-[50%] align-baseline py-10 px-2">
        {Fields.map((field) => (
          <>
            <div className="text-xl py-2 text-[#28AC95] px-1	">
              {field.name} <span className="text-black text-sm">{field.value}</span>
            </div>
            <div className="text-md "></div>
          </>
        ))}
      </div>
      <div className="w-[55%] px-10">
        <h1 className="text-2xl font-bold pb-4 capitalize"> {prop.title}</h1>
        <p>{prop.description}</p>
        <div className="h-5">

        <Border />
        </div>
        {/* <button className=" w-3/12 m-auto bg-orange-400	 hover:bg-orange-500	 active:bg-emerald-400	 text-white font-medium py-3 px-6 rounded-lg shadow-lg transition duration-300 transform-gpu hover:shadow-md active:translate-y-1">
          Reserve Place
        </button> */}
      </div>
      <div >
        
        <div dangerouslySetInnerHTML={{ __html: prop.map }}></div>

      </div>
    </div>
  );
};
export default Overview;