'use client'
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
// import Loading from "../../components/Home/Loading";

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

const UpcomingTrips: React.FC<{ context: any }> = ({ context }) => {
  const handleEditItinerary = (value: any) => {
    // setEditItinerary(value);
    ("context")
  };

  const router = useRouter();

  const { id } = useParams();
  const {
    data: trip,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetTripQuery(id);

  let content: JSX.Element | null;
   if (isLoading) {
     content = <Loading />
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
    <>
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
       <ItineraryDetails
        Days={trip.itineraryDetails}
        onChildValue={handleEditItinerary}
      />
      <AboutPayment />
      <AboutRoute />
      {/* <Gallery photo={trip.photos} /> */}
    </>
  );
} else if (isError) {
  content = <p>{error}</p>;
}
return (
  <>
    {/* <ApiProvider api={apiSlice}> */}
    {/* <Navbar /> */}
    {content}
    {/* <Departure /> */}

    {/* <Footer /> */}
    {/* </ApiProvider> */}
  </>
);
};

export default UpcomingTrips;