"use client";
import Loading from "@/components/Home/Loading";
import { TripCard } from "@/components/TripCard";
import { useGetTripsQuery } from "@/store/rutas.api";
import { Pagination } from "@mantine/core";
import Link from "next/link";
import React from "react";

type Props = {};

const page = (props: Props) => {
  const {
    data: trips,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetTripsQuery({});

  let content;
  if (isLoading) {
    content = <Loading />;
  } else if (isSuccess) {
    content = (
      <div className="grid grid-cols-3 gap-4">
        {trips.items?.map((trip: any) => (
          <div key={trip.id} className="flex flex-col">
            <Link href={`/UpcomingTrips/${trip.id}`}>
              <div>
                {/* <UpcomingCards
                  Image={trip.coverPhoto[0]?.filename}
                  Title={trip.title}
                  Price={trip.price}
                  StartDate={trip.startedDate}
                  Description={trip.description}
                /> */}
                <TripCard
                  Image={trip.coverPhoto[0]?.filename}
                  Title={trip.title}
                  Price={trip.price}
                  StartDate={trip.startedDate}
                  NumberOfDays={trip.numberOfDays}
                  Description={trip.description}
                />
              </div>
            </Link>
          </div>
        ))}
      </div>
    );
  } else if (isError) {
    // content = <p>{error}</p>;
  }

  return (
    <div className="bg-black">
      {/* <TripCard /> */}
      <p className="uppercase text-white text-5xl font-bold border-b boder-b-2 p-2 pt-5 w-">
        Browse Trips
      </p>
      {content}

      {/* <Pagination  mt="sm" /> */}
    </div>
  );
};

export default page;
