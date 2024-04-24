import { useState } from 'react';
import { Modal, Pagination,Button } from 'flowbite-react';
import "../../../app/css/LoginPage.css";

export default function AddChallengeModalComponent() {
  const [isOpen, setIsOpen] = useState(false);
const [location1Search, setLocation1] = useState<string>("");
const [location2Search, setLocation2] = useState<string>("");
const [location3Search, setLocation3] = useState<string>("");
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
    <div className='px-10 py-10'>
      <button
        type="button"
        onClick={openModal}
        className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
      >
        Add Challenge
      </button>
   
        <h3 className="text-lg font-medium leading-6 text-gray-900">
            Add Challenge
          </h3>
          <div className='bg-black rounded-lg px-10 py-10'>
          <div className="mt-4">
            <label htmlFor="visibility" className="block text-sm font-medium text-gray-700">
              Visibility
            </label>
            <select
              id="visibility"
              name="visibility"
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              defaultValue="Public"
            >
              <option>Public</option>
              <option>Private</option>
            </select>
          </div>

          <div className="mt-4">
            <label htmlFor="locations" className="block text-sm font-medium text-gray-700">
              Locations
            </label>
            <div className="mt-1 grid grid-cols-3 gap-2">
            <input
            value=''
            onChange={(e) => setLocation1(e.target.value)}
            placeholder="Location 1"
            className="rounded-lg  lg:w-40 lexendFontLight text-black px-1"
          ></input>
              <input
            value=''
            onChange={(e) => setLocation2(e.target.value)}
            placeholder="Location 2"
            className="rounded-lg  lg:w-40 lexendFontLight text-black px-1"
          ></input>
                <input
            value=''
            onChange={(e) => setLocation3(e.target.value)}
            placeholder="Location 3"
            className="rounded-lg  lg:w-40 lexendFontLight text-black px-1"
          ></input>
            </div>
            <Button
              className=" h-10  mt-3 bg-orange-500  w-20 md:w-36 rounded-xl  md:rounded-lg  hover:!bg-orange-500 text-black jura"
            >
              <h3 className=" text-base  md:text-xl   md:w-36 rounded-xl  md:rounded-lg ">Add More</h3>
            </Button>
          </div>

          <div className="mt-4">
            <h1 className="block jura text-2xl  font-medium text-white">
              Description
            </h1>
            <div className="mt-1">
              <textarea
              
                className="shadow-sm focus:ring-indigo-500 jura focus:border-indigo-500 mt-1 block w-full text-base lg:text-lg border-gray-300 rounded-md"
                placeholder="Add your description."
              />
            </div>
          </div>
          </div>
      <div className='flex  justify-end px-5 py-5'>
         <div>
         
         <Button
              className=" mr-5  mt-3 bg-orange-500  w-20 md:w-36 rounded-xl  md:rounded-lg hover:!bg-orange-500 text-black jura"
              
             
            >
              <h3 className=" text-base  md:text-3xl   md:w-36 rounded-xl  md:rounded-lg ">Confirm</h3>
            </Button>
         </div>
          <div>
          <Button
              className="  mt-3 bg-orange-500  w-20 md:w-36 rounded-xl  md:rounded-lg  hover:!bg-orange-500 text-black jura"
            >
              <h3 className=" text-base  md:text-3xl   md:w-36 rounded-xl  md:rounded-lg ">Close</h3>
            </Button>
          </div>
          </div>
          </div>
        
    </>
  );
}