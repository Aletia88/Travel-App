"use client"
import * as React from "react";
import countries from "../../data/countries.json";
import { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { Button } from "@mantine/core";

const travels = [
  { value: "Private", key: "1" },
  { value: "Family", key: "2" },
  { value: "Couples", key: "3" },
];

const contactMethod = [
  { value: "Email", key: "1" },
  { value: "Whatsapp", key: "2" },
  { value: "Telegram", key: "3" },
];

const PersonalInfo: React.FC = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [numberOfPeople, setNumberOfPeople] = useState<number>(0);
  const [numberOfDays, setNumberOfDays] = useState<number>(0);
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [destinationCountry, setDestinationCountry] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [type, setType] = useState<string>("");

  const [selectedCountryCode, setSelectedCountryCode] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [confirm, setConfirm] = useState<boolean>(false);
  const [description, setDescription] = useState<string>("");
  const [contact, setContact] = useState<string>("");

  const handleDetail = () => {
    confirm ? setConfirm(false) : setConfirm(true);
  };

  const handleConfirm = () => {
    confirm ? setConfirm(false) : setConfirm(true);
  };

  const handleDateChange = (date: Date | [Date, Date] | null) => {
    if (date instanceof Date) {
      setSelectedDate(date);
    }
  };

  const handleType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setType(e.target.value);
  };

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(e.target.value);
  };

  const handleDestinationCountry = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setDestinationCountry(e.target.value);
  };

  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const handleSubmit = async () => {
    const upload = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: selectedCountryCode,
      numberOfPeople: numberOfPeople,
      country: selectedCountry,
      departureCity: city,
      travelCity: city,
      destinationCountry: destinationCountry,
      type: type,
      contactMethod: contact,
      description: description,
      numberOfDays: numberOfDays,
      startedDate: selectedDate,
    };

    try {
      const res1 = await axios.post(
        `http://localhost:3100/private-trips/`,
        upload
      );
      console.log(res1.data); // Assuming you want to log the response
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col w-9/12 m-auto py-8">
      {/* Personal Information */}
      <div className="border-b border-gray-900/10 pb-12">
        <h2 className="text-lg font-semibold leading-7 text-gray-900">
          Personal Information
        </h2>

        <div className="flex flex-col gap-4 mt-10">
          <div className="flex flex-col gap-8 m-auto w-11/12 md:flex-row sm:flex-row">
            <div className="w-full sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                First name
              </label>
              <div className="mt-2">
                <input
                  onChange={(e) => setFirstName(e.target.value)}
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  placeholder="Your First name"
                  className="block w-full outline-none rounded-md border-0 px-2 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#28AC95] sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="w-full sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Last name
              </label>
              <div className="mt-2">
                <input
                  onChange={(e) => setLastName(e.target.value)}
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  placeholder="Your Last name"
                  className="block outline-none w-full rounded-md border-0 px-2 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#28AC95] sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="w-full sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="yourmail@gmail.com"
                  className="block outline-none w-full rounded-md border-0 px-2 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#28AC95] sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8 m-auto w-11/12 md:flex-row sm:flex-row">
            <div className="w-full  sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Phone Number
              </label>
              <div className="flex flex-row">
                <div className="block w-full rounded-md border-0 px-2 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#28AC95] sm:text-sm sm:leading-6">
                  <PhoneInput
                    // onCountryChange={(e) => console.log(e)}
                    defaultCountry="ET" // Set default country
                    placeholder="Enter phone number"
                    onChange={(value: string) => setSelectedCountryCode(value)}
                    value={selectedCountryCode}
                  />
                </div>
              </div>
            </div>

            <div className="w-full sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Number of People
              </label>
              <div className="mt-2">
                <input
                  onChange={(e) => setNumberOfPeople(Number(e.target.value))}
                  type="number"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  placeholder="Number of People in the tour"
                  className="block outline-none w-full rounded-md border-0 px-2 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#28AC95] sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="w-full sm:col-span-3">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Where are you from?
              </label>
              <select
                value={selectedCountry}
                onChange={handleCountryChange}
                className="block outline-none w-full mt-2 rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#28AC95] sm:text-sm sm:leading-6"
              >
                <option value="" className="text-gray-400">
                  Select a country
                </option>
                {countries.map((country) => (
                  <option key={country.name} value={country.name}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
      {/* Type of Tour  you are interested */}
      <div className="flex flex-col mt-4 border-b border-gray-900/10 pb-12">
        <h2 className=" m-auto text-base font-semibold leading-7 text-gray-900">
          Type of Tour you are interested
        </h2>

        <div className="flex flex-col gap-4 mt-10">
          <div className="flex flex-col gap-8 m-auto w-11/12 md:flex-row sm:flex-row">
            <div className="w-full sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Travel Type
              </label>
              <div className="">
                <div className="block outline-none w-full rounded-md border-0 px-2  text-gray-900   placeholder:text-gray-400  sm:text-sm sm:leading-6">
                  <select
                    value={type}
                    onChange={handleType}
                    className="block w-full outline-none rounded-md border-0 px-2 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#28AC95] sm:text-sm sm:leading-6"
                  >
                    <option value="" className=" text-gray-400">
                      Select type of Travel
                    </option>
                    {travels.map((type) => (
                      <option
                        className="border-b-4"
                        key={type.key}
                        value={type.value}
                      >
                        {type.value}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="w-full sm:col-span-3">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Destination Country
              </label>
              <select
                value={destinationCountry}
                onChange={handleDestinationCountry}
                className="block w-full outline-none rounded-md border-0 px-2 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#28AC95] sm:text-sm sm:leading-6"
              >
                <option value="">Select a country</option>
                {countries.map((country) => (
                  <option key={country.name} value={country.name}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="w-full sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Destination City
              </label>
              <div className="">
                <input
                  onChange={(e) => setCity(e.target.value)}
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  placeholder="Enter a city"
                  className="block w-full outline-none rounded-md border-0 px-2 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#28AC95] sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8 m-auto w-11/12 md:flex-row sm:flex-row">
            <div className="w-full sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Number of days
              </label>
              <div className="mt-2">
                <input
                  onChange={(e) => setNumberOfDays(Number(e.target.value))}
                  type="number"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  placeholder="+1 555 555-1234"
                  className="block w-full outline-none rounded-md border-0 px-2 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#28AC95] sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="w-full sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Starting Date
              </label>
              <div className="block w-full outline-none mt-2 rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#28AC95] sm:text-sm sm:leading-6">
                <DatePicker
                  selected={selectedDate}
                  onChange={handleDateChange}
                  showTimeSelect
                  minDate={tomorrow}
                  timeFormat="HH:mm"
                  timeIntervals={15}
                  dateFormat="MMMM d, yyyy h:mm aa"
                  placeholderText="Select date and time"
                />
              </div>
            </div>
            <div className="w-full sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Preferred contact method
              </label>
              <div className="">
                <div className="block w-full outline-none rounded-md border-0 px-2 py-2 text-gray-900  placeholder:text-gray-400  sm:text-sm sm:leading-6">
                  <select
                    onChange={(e) => setContact(e.target.value)}
                    className="block w-full rounded-md border-0 px-2 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#28AC95] sm:text-sm sm:leading-6"
                  >
                    <option value="" className=" text-gray-400">
                      Select preferred contact method
                    </option>
                    {contactMethod.map((type) => (
                      <option
                        className="border-b-4"
                        key={type.key}
                        value={type.value}
                      >
                        {type.value}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
                    
            </div>
            <div className="  sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Description
              </label>
              <div className="mt-2 mx-4">
                <textarea
                  onChange={(e) => setDescription(e.target.value)}
                  id="email"
                  name="email"
                  autoComplete="email"
                  placeholder="Provide a brief description of your requirements..."
                  className="block w-full outline-none rounded-md border-0 px-2 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
        </div>
      </div>
      {/* Terms and Condition */}
      <div className="flex flex-col mt-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            className="form-checkbox h-4 outline-none w-4 text-indigo-600 transition duration-150 ease-in-out"
            onChange={handleDetail}
          />
          <span className="ml-2 text-sm text-gray-900">
            I accept the{" "}
            <a href="#" className="underline">
              Terms and Conditions
            </a>
          </span>
        </label>
        {!confirm ? (
          <Button
            onClick={handleSubmit}
            data-disabled
            className={`  mt-4 bg-indigo-600 outline-none hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in-out duration-150 py-2 px-4 border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 sm:w-auto sm:text-sm`}
          >
            Confirm
          </Button>
        ) : 
        (
            <Button
            onClick={handleSubmit}
           
            className={`   mt-4 bg-indigo-600 outline-none hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in-out duration-150 py-2 px-4 border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 sm:w-auto sm:text-sm`}
          >
            Confirm
          </Button>
        )}
      </div>
    </div>
  );
};

export default PersonalInfo;
