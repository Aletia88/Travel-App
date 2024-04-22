import { Border } from "@/components/Border";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <div>
     
      <div className="relative ">
        <img
          src="https://images.unsplash.com/photo-1530313292289-fa316f332666?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="w-full  h-96 object-cover object-center"
        />
        <p className=" absolute top-56 font-extrabold text-white text-6xl left-56">
          Omo Valley <br /> Ethiopia
        </p>
      </div>
      <ul className="flex justify-end w-full space-x-6 px-5 py-2 mb-5 ">
        <li>
          <Link href="#">Overview</Link>
        </li>
        <li>
          <Link href="#">Itinerary details</Link>
        </li>
        <li>
          <Link href="#">Logistics of the trip</Link>
        </li>
        <li>
          <Link href="#">Price details</Link>
        </li>
        <li>
          <Link href="#">Important info</Link>
        </li>
        <li>
          <Link href="#">Gallery</Link>
        </li>
      </ul>
      <hr className="w-full text-gray" />
      <div className="flex space-x-4 mx-5 py-10 justify-center ">
        <div className="w-[15%] bg-[#f5f5f5] flex flex-col h-[50%] align-baseline py-10 px-2">
          <p>
            Days <span>12</span>
          </p>
          <p>
            From <span>$900</span>
          </p>
          <p>
            Journey <span>Bus</span>
          </p>
          <p>
            Time of Year <span>March - April</span>
          </p>
        </div>
        <div className="w-[55%] px-10">
          <h1 className="text-2xl font-bold pb-4">Omo Valley</h1>
          <p className="my-5">
            Ethiopia and coffee are closely linked. The restorative drink is
            part of the cultural identity of Ethiopians and is a legacy of their
            past. The south of the country proudly exhibits its coffee
            plantations that continue to be a reference in the world market.{" "}
            <br />
            Coffee, therefore, will be the axis of this route through Ethiopia.
            A different destination and the most disparate of African countries.
            Origin of Humanity, gateway of Christianity in the continent and
            example of religious variety, nature and anthropology. <br />
            In this route we will combine the visit to the area of Yirga Alem,
            emblematic place where there are coffee crops in the Sidama area,
            with the experience of living with ethnic groups of the south of
            great cultural wealth.
          </p>
          <Border />
        </div>
        <div className="w-[30%] ">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4259101.044574931!2d39.418912354691884!3d7.42408853534252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2set!4v1713458853658!5m2!1sen!2set" className="border-0 w-full " height="300px"  ></iframe>
        {/* <button>View map details</button> */}
        </div>
      </div>
    </div>
  );
}

export default page;
