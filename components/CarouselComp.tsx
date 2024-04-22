"use client";
import React from 'react'
import Carousel from "react-multi-carousel";
  import "react-multi-carousel/lib/styles.css";
import { TripCard } from './TripCard';
import { TripCardTest } from './TripCardTest';
import Link from 'next/link';
import Loading from './Home/Loading';
import { useGetTripsQuery } from '@/store/rutas.api';

function CarouselComp() {
  
  
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  const {
    data: trips,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetTripsQuery({top: 5, skip: 2}); 


    
  return(
    <div className="flex flex-col gap-6  bg-black">
      <div className="justify-self-center m-auto">
        
      </div>

      <div>
      { trips && <Carousel
          swipeable={true}
          draggable={true}
          showDots={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          // autoPlay={this.props.deviceType !== "mobile" ? true : false}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={[ "mobile"]}
          // deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style mt-4"
          itemClass="carousel-item-padding-40-px"
        >

{trips && trips.items?.map((trip: any) => (
    <div key={trip.id} className="flex flex-col">
      <Link href={`/UpcomingTrips/${trip.id}`}>
        <div>
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

  </Carousel>}



  </div>



</div>
  )
}

export default CarouselComp;
