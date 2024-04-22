"use client";
import React from 'react'
import Carousel from "react-multi-carousel";
  import "react-multi-carousel/lib/styles.css";
import { TripCard } from '../components/TripCard';

function CarouselComp() {
  
  
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
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
  };
  return(
    <div className="flex flex-col gap-6 mt-16">
      <div className="justify-self-center m-auto">
        <h1 className="mb-2 text-lg font-medium dark:text-white text-gray-900">
          Gallery
        </h1>
      </div>

      <div>
  <Carousel
    // swipeable={false}
    // draggable={false}
    // showDots={true}
    responsive={responsive}
    // ssr={true} // means to render carousel on server-side.
    // infinite={true}
    // autoPlay={this.props.deviceType !== "mobile" ? true : false}
    // autoPlaySpeed={1000}
    // keyBoardControl={true}
    // customTransition="all .5"
    // transitionDuration={500}
    // containerClass="carousel-container"
    // removeArrowOnDeviceType={["tablet", "mobile"]}
    // // deviceType={this.props.deviceType}
    // dotListClass="custom-dot-list-style"
    // itemClass="carousel-item-padding-40-px"
  >

  <TripCard />
  <TripCard />
  <TripCard />
  <TripCard />

  </Carousel>



  </div>


<button className="justify-self-center m-auto w-[200px] bg-emerald-400	 hover:bg-emerald-500	 active:bg-emerald-400	 text-white font-medium py-3 px-6 rounded-lg shadow-lg transition duration-300 transform-gpu hover:shadow-md active:translate-y-1">
  {/* <Link href="/UpcomingTrips">See Trips</Link> */}
</button>
</div>
  )
}

export default CarouselComp;
