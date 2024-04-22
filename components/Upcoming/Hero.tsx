import axios from "axios";
import * as React from "react";
import { useState, useEffect } from "react";

function Hero(prop: any) {
  // const [cover, setCover] = useState('');

  // const handleDownload = () => {
  //   const file = prop?.Image && prop?.Image[0]?.filename
  //   if (!file) {
  //     return
  //   }
  //   axios.get(`http://localhost:3100/upcoming-trips/download/${file}`, {
  //     responseType: 'blob',
  //   })
  //     .then(function (response) {
  //       const url = window.URL.createObjectURL(new Blob([response.data]));
  //       setCover(url);
  //     })
  //     .catch(function (error) {
  //       console.error('Error downloading file:', error);
  //     });

  // };

  // useEffect(() => {
  //   handleDownload();
  // }, [prop.Image]);

  //   const {
  //     data: image,
  //     isLoading,
  //     isSuccess,
  //     isError,
  //     error

  // } = useGetImageQuery(prop.Image[0]?.filename)

  // let content;
  //     if (isLoading) {
  //         content = <p>...Loading</p>
  //     } else if (isSuccess) {
  //         content = <div
  //         className="flex h-[60vh] w-full items-center justify-center p-auto"
  //         style={{
  //           backgroundImage: `url(http://localhost:3100/upcoming-trips/download/${prop.Image[0]?.filename})`,
  //           backgroundSize: 'cover',
  //           backgroundPosition: 'center',
  //           backgroundRepeat: 'no-repeat'
  //         }}
  //       >
  //         <div className="flex z-10 items-center flex-col space-y-6	">
  //           <h1 className='italic font-bold	text-4xl	font-["Open_Sans"]'>Omo Valley</h1>
  //           <h1 className='italic font-bold	text-4xl	font-["Open_Sans"]'>Ethiopia</h1>
  //           <button className="bg-emerald-400	 hover:bg-emerald-500	 active:bg-emerald-400	 text-white font-medium py-3 px-6 rounded-lg shadow-lg transition duration-300 transform-gpu hover:shadow-md active:translate-y-1">
  //             See Trips
  //           </button>
  //         </div>
  //       </div>
  //     }
  //     else if (isError) {
  //         content = <p>{error}</p>
  //     }
  return (
    <>
      <div style={{
          backgroundImage: `url(http://93.127.163.40:4000/upcoming-trips/download/${prop.image[0]?.filename})`,
          // backgroundImage: `url(https://images.unsplash.com/photo-1530313292289-fa316f332666?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }} className="w-full  h-96 object-cover object-center">
        <div className="flex z-10 items-center flex-col space-y-6	">
          <h1 className=" absolute top-56 font-extrabold text-white text-6xl left-56">
            {prop.title}
          </h1>
         
        </div>
      </div>
    </>
  );
}

export default Hero;