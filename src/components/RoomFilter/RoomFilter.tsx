  

"use client";

import React, { useState, useEffect } from "react";
import sanityClient from "@/libs/sanity";
import RoomCard from "../RoomCard/RoomCard";
import { Room } from "@/models/room";

const RoomFilter = () => {
  const [checkinDate, setCheckinDate] = useState("");
  const [checkoutDate, setCheckoutDate] = useState("");
  const [rooms, setRooms] = useState<Room[]>([]);
  const [availableRooms, setAvailableRooms] = useState<Room[]>([]);

  // Fetch all rooms on component mount
  useEffect(() => {
    const fetchRooms = async () => {
      const query = `*[_type == "hotelRoom"]{
        _id,
        name,
        slug,
        price,
        type,
        description,
        coverImage,
        isBooked
      }`;

      try {
        const roomsData = await sanityClient.fetch(query);
        setRooms(roomsData);
        setAvailableRooms(roomsData); // Show all rooms initially
      } catch (error) {
        console.error("Error fetching rooms:", error);
      }
    };

    fetchRooms();
  }, []);

  const handleSearch = async () => {
    if (!checkinDate || !checkoutDate) {
      alert("Please select both check-in and check-out dates.");
      return;
    }

    const checkinDateObj = new Date(checkinDate);
    const checkoutDateObj = new Date(checkoutDate);

    if (checkinDateObj >= checkoutDateObj) {
      alert("Check-out date must be after check-in date.");
      return;
    }

    // Fetch bookings overlapping with selected dates
    const query = `*[_type == "booking" &&
      checkinDate < "${checkoutDate}" &&
      checkoutDate > "${checkinDate}"
    ]{
      hotelRoom->{
        _id
      }
    }`;

    try {
      const bookings = await sanityClient.fetch(query);
      const bookedRoomIds = bookings.map((booking: any) => booking.hotelRoom._id);

      // Filter rooms that are not booked during the selected dates
      const available = rooms.filter(
        (room: Room) => !bookedRoomIds.includes(room._id)
      );

      setAvailableRooms(available);
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  };

  return (
    // <section className="px-4 py-6">
    //   <div className="container mx-auto bg-gray-100 p-6 rounded-lg shadow-lg">
    //     {/* Check-in Date and Check-out Date */}
    //     <div className="flex flex-col md:flex-row md:items-end md:space-x-4">
    //       <div className="flex md:w-full">
    //         {/* Check-in Date */}
    //         <div className="flex-1 mb-4 md:mb-0">
    //           <input
    //             type="date"
    //             value={checkinDate}
    //             onChange={(e) => setCheckinDate(e.target.value)}
    //             placeholder="Check-in Date"
    //             className="w-full px-4 py-3 rounded leading-tight bg-white text-black border border-gray-300 focus:outline-none appearance-none placeholder-gray-400"
    //           />
    //         </div>

    //         {/* Check-out Date */}
    //         <div className="flex-1 mb-4 md:mb-0">
    //           <input
    //             type="date"
    //             value={checkoutDate}
    //             onChange={(e) => setCheckoutDate(e.target.value)}
    //             placeholder="Check-out Date"
    //             className="w-full px-4 py-3 rounded leading-tight text-black bg-white border border-gray-300 focus:outline-none  appearance-none placeholder-gray-400"
    //           />
    //         </div>
    //       </div>

    //       {/* Search Button */}
    //       <button
    //         className="mt-4 md:mt-0 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
    //         type="button"
    //         onClick={handleSearch}
    //       >
    //         Search
    //       </button>
    //     </div>
    //   </div>

    //   {/* Display Available Rooms */}
    //   {availableRooms.length === 0 ? (
    //     <p className="mt-6 text-center text-gray-700">
    //       No rooms available for the selected dates.
    //     </p>
    //   ) : (
    //     <div className="room-cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
    //       {availableRooms.map((room: Room) => (
    //         <RoomCard key={room._id} room={room} />
    //       ))}
    //     </div>
    //   )}
    // </section>











    <section className="px-4 py-6">
  <div className="container mx-auto bg-gray-100 p-6 rounded-lg shadow-lg">
    {/* Check-in Date and Check-out Date */}
    <div className="flex flex-col md:flex-row md:items-end md:space-x-4 space-y-4 md:space-y-0">
      <div className="flex flex-col md:flex-row w-full">
        {/* Check-in Date */}
        <div className="flex-1 mb-4 md:mb-0">
          <input
            type="date"
            value={checkinDate}
            onChange={(e) => setCheckinDate(e.target.value)}
            placeholder="Check-in Date"
            className="w-full px-4 py-3 rounded-md leading-tight bg-white text-black border border-gray-300 focus:outline-none appearance-none placeholder-gray-400 text-sm md:text-base"
          />
        </div>

        {/* Check-out Date */}
        <div className="flex-1 mb-4 md:mb-0 md:ml-4">
          <input 
            type="date"
            value={checkoutDate}
            onChange={(e) => setCheckoutDate(e.target.value)}
            placeholder="Check-out Date"
            className="w-full px-4 py-3 rounded-md leading-tight bg-white text-black border border-gray-300 focus:outline-none appearance-none placeholder-gray-400 text-sm md:text-base"
          /> 
        </div>
      </div>

      {/* Search Button */}
      <div className="w-full md:w-auto">
        <button
          className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
          type="button"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  </div>

  {/* Display Available Rooms */}
  {availableRooms.length === 0 ? (
    <p className="mt-6 text-center text-gray-700">
      No rooms available for the selected dates.
    </p>
  ) : (
    <div className="room-cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
      {availableRooms.map((room: Room) => (
        <RoomCard key={room._id} room={room} />
      ))}
    </div>
  )}
</section>

  );
};

export default RoomFilter;
