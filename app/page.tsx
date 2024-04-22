"use client";
import { ImagesSliders } from "@/components/ImageSliders";
import { TextGenerate } from "@/components/Text";
import { TripCard } from "@/components/TripCard";
import { IoIosSearch } from "react-icons/io";
import { Button } from "@mantine/core";
import { Scroll } from "@/components/Scroll";
import { Testimonials } from "@/components/Testimonials";
import { Tips } from "@/components/Tips";
import { TravelTips } from "@/components/Travel-Tips";
import NoScroll from "@/components/NoScroll";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import CarouselComp from "@/components/CarouselComp";
import Link from "next/link";
import { useGetTripsQuery } from "@/store/rutas.api";
import Loading from "@/components/Home/Loading";

type Props = {};

export default function Home(props: Props) {
// content = <p>{error}</p>;
  
  return (
    <main className="relative">
      <div className="">
        <img
          src="/Yellow Logo Portrait copy 3 (6).png"
          className="absolute top-5 left-5 md:left-10 z-50 inset-x-0 md:w-24 w-[15%]"
          alt=""
        />
        <ImagesSliders />
      </div>
      <div className="md:flex justify-between md:px-10 md:pl-16 items-center py-5 bg-black text-white">
        <div className=" md:w-[40%] px-8 md:px-0 md:border-r-2 md:pr-2 border-white">
          <p className="w-full py-3 font-bold text-2xl">
            Únete a una de nuestras rutas y deja que la serendipia te sorprenda
            en cada paso del viaje.
          </p>
          <div className="flex justify-center space-x-14 my-4">
            <div className="flex flex-col justify-center items-center">
              <img
                src="/Group travel (2).png"
                className="rounded-full pb-3  w-[80%]"
                alt=""
              />
              <p>Group Travel</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                src="/Private travel.png"
                className="rounded-full pb-3  w-[80%]"
                alt=""
              />
              <p>Private Travel</p>
            </div>
          </div>
        </div>
        <p className="  py-12 text-white md:w-[60%] px-8">
          Rutas de Serendipia es una agencia de viajes de aventura que apuesta
          por una forma de viajar alternativa, construida a través de
          experiencias, donde la conexión con el entorno es fundamental. <br />{" "}
          <br /> ¡En nuestros viajes no solo exploramos los destinos y los
          paisajes impresionantes que estos nos brindan, sino que también nos
          sumergimos en sus profundidades! Nos gusta adentrarnos en las culturas
          locales, buscando entender y vivir sus tradiciones y costumbres,
          conocer y aprender de sus gentes. Comprometidos siempre con una forma
          de viaje responsable donde la sostenibilidad y el respeto por el
          patrimonio ambiental y cultural son pilares esenciales. <br /> <br />{" "}
          Nos apasionan las rutas menos explotadas, las rutas activas llenas
          desde caminatas por senderos épicos hasta talleres con artesanos
          locales. Esta filosofía de viaje convierte nuestros pequeños grupos en
          más que simples compañeros de viaje, creando así una comunidad unida
          por la pasión de viajar y explorar.
        </p>
      </div>
      <div className="  pb-10  self-center bg-black justify-center flex flex-col items-center">
        <p className="md:text-6xl text-3xl  md:w-1/2  ml-2  self-start text-white border-b-2 py-4 px-8  uppercase rounded-md">
          {"   "}Upcoming Trip
        </p>
   

   </div>
        <CarouselComp />
      
        
        <div className="  pb-10  self-center bg-black justify-center flex flex-col items-center">

        <button className="px-4 py-2 backdrop-blur-sm border border-white rounded-md hover:shadow-[0px_0px_4px_4px_rgba(0,0,0,0.1)] bg-white/[0.9] text-sm transition duration-200 mb-8  flex items-center gap-2 mt-4">
          See All Trips <IoIosSearch />
        </button>
      </div>
      {/* <NoScroll /> */}
      <Scroll />


      <p className="text-3xl px-5 font-extrabold text-white py-28 w-full m-auto flex self-center align-middl"></p>
      <div className=" relative px-4 flex flex-col items-center bg-white text-black">
        <p className="md:text-4xl text-3xl font-semibold  pt-10">
          Stories, Tips, And Guides
        </p>
        <p className="pb-5 pxl-8 text-sm md:text-md">
          New Stories, New Perspectives: Discover The World With Our Latest Blog
          Posts.
        </p>
      </div>
  <TravelTips />
      {/* </div> */}

      <div className=" text-black bg-white flex w-full items-center justify-center flex-col p-5 pt-14">
        <div className="flex justify-center flex-col items-center text-start ali w-full">
          <p className="md:text-6xl text-4xl font-extrabold uppercase px-8 md:px-0">Testimonials</p>
          <p className="border-b-4 border-black md:px-2 rounded">
            What Our Customers Say
          </p>
        </div>
      </div>
      <div className="bg-white">

        <Tips />
      </div>
      <div className="scroll w-full h-screen -z-20 no-scrollbar object-cover sticky top-[0px] bottom-0 overflow-hidden"></div>
      <FloatingWhatsApp
        phoneNumber="+251934795617"
        accountName="NathyG"
        allowEsc
        allowClickAway
        notification
        notificationSound
      />
    </main>
  );
}
