"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "./ui/text-reveal-cards"

export function TextR() {
  return (
    <div className="flex items-center justify-center  h-[50rem] rounded-2xl w-full">
      <TextRevealCard
        text="Immerse yourself in the adventure and discover the essence of each place!"
        revealText=" Immerse yourself in the adventure and discover the essence of each place!"
      >
        <TextRevealCardTitle children={undefined}>
            
        </TextRevealCardTitle>
        <TextRevealCardDescription children={undefined}>
       
        </TextRevealCardDescription>
      </TextRevealCard>
    </div>
  );
}
