import { useState } from 'react';

export default function Fly({ setLocation, setMode, setDestination }) {
  const [showDestination, setShowDestination] = useState<boolean | undefined>(
    false,
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    const target = e.currentTarget as HTMLInputElement;
    const formData = new FormData(target);

    const mode = formData.get('mapMode');
    const location = formData.get('location');
    const destination = formData.get('destination');

    setMode(mode);
    setLocation(location);
    setDestination(destination);
  };

  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="off"
      className="w-full sticky top-0 flex items-end justify-center bg-gray-100 py-3 gap-5 px-2">
      {/*Map Mode */}
      <div>
        <label
          htmlFor="mapMode"
          className="text-gray-700 text-lg hidden md:block ml-1">
          Mode:
        </label>
        <select
          name="mapMode"
          onChange={(e) =>
            setShowDestination(e.target.value === 'directions' ? true : false)
          }
          className="text-gray-700 text-md border border-gray-300 rounded-md focus:ring-blue-600 focus:border-blue-600 block py-1 px-2">
          <option selected value="">
            Select mode
          </option>
          <option value="place">Place</option>
          <option value="view">View</option>
          <option value="directions">Directions</option>
          <option value="streetview">Streetview</option>
        </select>
      </div>

      {/*Location */}
      <div>
        <label
          htmlFor="location"
          className="text-gray-700 text-lg hidden md:block ml-1">
          Location:
        </label>
        <input
          className="w-full max-w-[300px] py-1 px-2 outline-none border border-gray-300 rounded-md focus:border focus:border-blue-500"
          type="text"
          name="location"
          placeholder="Enter your location"
        />
      </div>

      {/*Destination */}
      <div className={showDestination ? 'block' : 'hidden'}>
        <label
          htmlFor="destination"
          className="text-gray-700 text-lg hidden md:block ml-1">
          Destination:
        </label>
        <input
          className="w-full max-w-[300px] py-1 px-2 outline-none border border-gray-300 rounded-md focus:border focus:border-blue-500"
          type="text"
          name="destination"
          placeholder="Enter your destination"
        />
      </div>

      <button
        className="py-1 px-3 bg-blue-600 rounded-md hover:bg-blue-700 text-white"
        type="submit">
        GO
      </button>
    </form>
  );
}
