"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `Upcoming Trips
`;

export function TextGenerate() {
  return <TextGenerateEffect words={words} />;
}
