"use client"
import React from "react";
import Link from "next/link";
import { LuFacebook } from "react-icons/lu";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import '@mantine/core/styles.css';
import { TextInput, Checkbox, Button, Group, Box } from '@mantine/core';
import { useForm } from '@mantine/form';

function Footer() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      email: '',
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? '' : 'Invalid email'),
    },
  });
  const emailInputProps = form.getInputProps('email');

  return (
    <div className="bg-gray-900 text-white sticy bottom-0 w-full" id="footer " >
      <div className="container mx-auhref py-8 px-4">
        <div className="flex flex-col md:flex-row md:justify-between justify-center items-center md:items-start" >
          <div className=" pl-12 hidden md:block">
            <p className="pb-3 uppercase">Navigaiton</p>
            <ul className=" font-light text-white text-md">
              <li className="">
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/About">About</Link>
              </li>
              <li>
                <Link href="../Things"></Link>
              </li>
              <Link href="../About">
                <li>About</li>
              </Link>
              <li>Contact</li>
            </ul>
          </div>

          <div className="hidden md:block">
          
            <p>
              Why you should choose us? <br /> 
              Testimonials <br />
              Upcoming trips <br />
              Explore the world
            </p>
          </div>

          <div className="">
            <h1 className="uppercase">Contact Us</h1> <br className="md:block hidden" />
            <p className="hidden md:block">
              For all inquiries use <span className="text-[#1C7ED6] cursor-pointer">  antonina@gmail.com </span><br /> or head over to our 
             <Link href="/Contact" className="text-[#1C7ED6]"> Contact page</Link>  and <br /> send us a message.{" "}
            </p>
            <div className="flex md:gap-x-2 gap-x-4  items-center my-4">
              <LuFacebook />
              <BsTwitterX />
              <FaInstagram />
              <FaPhoneAlt className="pl-1" /> <p>+251 916010473</p>
            </div>
          </div>

          <div>
            <p className="uppercase ">subscribe to our newsletter</p>
            <p>
              {" "}
              <br />subscribe to our newsletter <br /> to stay up to  date with the
              latest<br /> news and offers
            </p>
            <Box maw={340} mx="auto">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>

      <TextInput mt="sm" label="Email" placeholder="Email" {...form.getInputProps('email')} />


        <Group justify="flex-end" mt="md">
          <Button type="submit" className="">Submit</Button>
        </Group>
      </form>
    </Box>
            <br />
        
          </div>
        </div>
        <div className="border-t flex justify-between ml-4 items-center  border-gray-700 mt-8 pt-4">
          <img src="/Main Logo Portrait 3.png" alt="" />
          <p className="text-sm text-gray-500 text-center">
            &copy; {new Date().getFullYear()}  All rights
            reserved.
          </p>
          <p className="text-sm text-gray-500 text-center">Terms of Use     |     Privacy Policy</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
