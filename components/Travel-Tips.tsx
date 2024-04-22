
"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { DirectionAwareHover } from "./ui/direction-aware-hover";
import Tips from '../data/Tips.json'

export function TravelTips() {


    
  return (

        
      
     <div  className="pb-5 relative grid-cols-1 md:gap-x-6  px-4 max-w-full gap-4   grid md:grid-cols-2 lg:grid-cols-4 items-center justify-center bg-white">
      {Tips.map((Tip, index)=> (
            <DirectionAwareHover key={index} imageUrl={Tip.imageUrl}>
        <p className="font-bold text-xl">{Tip.title}</p>
              
        <p className="font-normal text-sm">{Tip.Description}</p>
      </DirectionAwareHover>
       
      ))}
    </div>
       
 
   
  );
}