"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Grupos pequeños: ",
    description:
      "Viajamos en grupos pequeños de  entre 4 y máximo 9 viajeros, asegurándonos así una mayor flexibilidad a la hora de movernos, un ambiente más cercano y familiar y la posibilidad de adaptar mejor y personalizar los itinerarios.Apostamos así por aventuras compartidas donde el alma del viaje se revela a través de la conexión humana. ",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
       <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1629141650344-db693cfd6d48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8R3J1cG9zJTIwcGVxdWUlQzMlQjFvcyUzQXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
      </div>
    ),
  },
  {
    title: "Flexibilidad ",
    description:
      "No nos gusta viajar de manera rígida ni los programas muy apretados. La flexibilidad y adaptabilidad en un viaje nos permiten la oportunidad de disfrutar de verdad. Asegurándonos así experiencias espontáneas y emocionantes que pueden surgir en el camino. Si un lugareño nos invita a tomar una taza de café en su casa o a participar en un evento social, nos gusta ",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src="https://images.unsplash.com/photo-1619472351888-f844a0b33f5b?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Apoyo a las comunidades locales: ",
    description:
      "Estamos comprometidos con una filosofía de viaje que no solo nos enriquece personalmente como viajeros, sino que también contribuye al bienestar de las comunidades locales. Trabajamos en estrecha colaboración con ellas, apoyando iniciativas de desarrollo sostenible, dejando así nuestro granito de arena. ¡Creemos en el turismo como una fuerza positiva para el cambio! ",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Interacción e intercambio cultural ",
    description:
      "Cuando visitamos un lugar nos gusta vivirlo y conocerlo en profundidad. Callejear y perdernos en sus mercados, compartir historias con su gente, participar en talleres artesanos, asistir a las celebraciones locales…Siempre intentamos crear una conexión significativa con el entorno en el que nos hallamos a través de la inmersión y el intercambio cultural fomentando un mayor entendimiento intercultural, compartiendo experiencias y aprendiendo unos de otros. ",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
      <img
        src="https://images.unsplash.com/photo-1529271230144-e8c648ef570d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        width={300}
        height={300}
        className="h-full w-full object-cover"
        alt="linear board demo"
      />
    </div>
    ),
  },
  {
    title: "Itinerarios activos ",
    description:
      "Nuestras rutas brindan la posibilidad de hacer una infinidad de actividades. Nos gustan las rutas dinámicas que hagan despertar todos los sentidos. Compartir risas alrededor de fogatas acampando bajo las estrellas, aprender a cocinar un plato local, hacer trekkings por aldeas remotas, aventurarnos en un safari nocturno…",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src="https://images.unsplash.com/photo-1607068891828-f16297950a66?q=80&w=1502&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Compromiso medioambiental",
    description:
      "En nuestro enfoque, la naturaleza es nuestra mayor inspiración y la respetamos en cada paso que damos en nuestras rutas. Apoyamos y fomentamos prácticas sostenibles y creemos en un turismo usado como herramienta para la conservación de la naturaleza. ",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src="https://images.unsplash.com/photo-1701401968817-b875db0d9257?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Autenticidad y simplicid",
    description:
      "En nuestros viajes trabajamos en estrecha colaboración con los proveedores locales, apoyando pequeños negocios familiares, cooperativas de artesanos y agricultores, restaurantes tradicionales …. Creemos que la verdadera magia del viaje se encuentra allí, en los rincones auténticos donde la esencia del viaje reside. ",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src="https://images.unsplash.com/photo-1597281362711-7004802c6881?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Coordinador y equipo local  ",
    description:
      "Los grupos van siempre acompañados de un coordinador de viaje de la agencia. En pocas palabras, un maestro en la organización con una profunda comprensión del mundo y enorme experiencia en el arte de viajar. Un aliado confiable y compañero de aventuras, estando así en buenas manos en cada paso del camino. Además, las rutas son siempre apoyadas por un equipo local en cada país, garantizando así itinerarios auténticos respaldados por la experiencia y profundo conocimiento del destino. ",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
      <img
        src="https://images.unsplash.com/photo-1701401968817-b875db0d9257?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        width={400}
        height={400}
        className="h-full w-full object-cover"
        alt="linear board demo"
      />
    </div>
    ),
  },
];
export function Scroll() {
  return (
    <div className="no-scrollbar scroll-m-0 overflow-hidden ">
      <StickyScroll content={content} />
    </div>
  );
}
