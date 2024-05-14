"use client";
import * as React from "react";
import { useState, useEffect } from "react";

import axios from "axios";
import Loading from "@/components/Home/Loading";
import { useGetTripQuery } from "@/store/rutas.api";
import { useParams, useRouter } from "next/navigation";
import Hero from "@/components/Upcoming/Hero";
import UNavbar from "@/components/Upcoming/UNavbar";
import Overview from "@/components/Upcoming/Overview";
import ItineraryDetails from "@/components/Upcoming/ItineraryDetails";
import AboutPayment from "@/components/Upcoming/AboutPayment";
import AboutRoute from "@/components/Upcoming/AboutRoute";
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
// import Loading from "../../components/Home/Loading";
import Tips from "../../../data/Tips.json";

interface Trip {
  coverPhoto: string;
  title: string;
  numberOfDays: number;
  price: number;
  journey: string;
  startedDate: string;
  description: string;
  location: string;
  itineraryDetails: string[];
  photos: string[];
}

const UpcomingTrips: React.FC = () => {
  let content: JSX.Element | null = null;
  const handleEditItinerary = (value: any) => {
    // setEditItinerary(value);
    ("context");
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  }
  const router = useRouter();

  const { id } = useParams();
  const {
    data: trip,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetTripQuery(id);

  if (isLoading) {
    content = <Loading />;
  } else if (isSuccess) {
    const date = new Date(trip?.startedDate);
    const formattedDate = date.toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      // minute: "numeric",
      // second: "numeric",
    });
    content = (
      <div className=" ">
        <Hero image={trip.coverPhoto} title={trip.title} />
        <UNavbar />
        <Overview
          days={trip.numberOfDays}
          price={trip.price}
          journey={trip.journey}
          date={formattedDate}
          description={trip.description}
          title={trip.title}
          map={trip.location}
        />
        <div className="h-36 flex items-center justify-center">
          <p className="text-2xl text-white font-bold tracking-wide ">
            Explora, aventúrate, descubre...
          </p>
        </div>
        {/* <div className="scroll w-full h-screen -z-20 no-scrollbar object-cover sticky top-[0px] bottom-0 overflow-hidden">
         <img
          src="https://images.unsplash.com/photo-1682695795255-b236b1f1267d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="absolute left-5 md:left-10 z-50 inset-x-0 md:w-24 w-[15%]"
          alt=""
        />
         </div> */}

        <AboutPayment />
        <AboutRoute />
        <div className="bg-white pt-20 flex items-center justify-center text-xl tracking-wide font-semibold">
      PHOTO GALLERY OF OMO VALLEY
      </div>
        <Carousel 
      swipeable={true}
      draggable={true}
      showDots={false}
      ssr={true}
      infinite={true}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["mobile"]}
      responsive={responsive} // Add responsive prop here
      dotListClass="custom-dot-list-style mt-4"
      itemClass="carousel-item-margin-40-px"
    >
     
          {Tips.map((tips) => (
            <div className="py-3  bg-white px-2">

            <img  src={tips.imageUrl} alt="" className="h-56 space-x-3" />
            </div>
          ))}
        </Carousel>
        <div className=" private h-screen -z-20 fixed top-0 bottom-0 bg-cover mt-10"></div>
        {/* <Gallery photo={trip.photos} /> */}
      </div>
    );
  } else if (isError) {
    // content = <p>{error}</p>;
  }
  return <>{content}</>;
};

export default UpcomingTrips;
