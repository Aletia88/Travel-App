"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import testimonials from '../data/Testimonial.json'

export function Tips() {
  return (
    <div className="h-[20rem] rounded-md flex flex-col antialiased max-w-screen dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden  md:space-x-4">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}


