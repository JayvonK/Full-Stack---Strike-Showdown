import { useState } from 'react';
import { Modal, Pagination } from 'flowbite-react';

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
      <button
        type="button"
        onClick={openModal}
        className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
      >
        Add Challenge
      </button>
      <Modal show={isOpen} onClose={closeModal}>
        <Modal.Header>
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Add Challenge
          </h3>
        </Modal.Header>
        <Modal.Body>
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
            <button
              type="button"
              className="mt-2 inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add more
            </button>
          </div>

          <div className="mt-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <div className="mt-1">
              <textarea
                id="description"
                name="description"
                rows={3}
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="Add your description."
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            type="button"
            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
            onClick={closeModal}
          >
            Confirm
          </button>
          <button
            type="button"
            className="ml-2 inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
            onClick={closeModal}
          >
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}