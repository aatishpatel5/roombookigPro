// import Link from "next/link";
// import React from "react";
// import { BiMessageDetail, BiSolidMessageDetail } from "react-icons/bi";
// import { BsFillSendFill, BsTelephoneOutbound } from "react-icons/bs";

// const Footer = () => {
//   return (
//     <footer className="mt-16">
//       <div className="container mx-auto px-4">
//         <Link href="/" className="font-black text-tertiary-dark">
//           Hotelzz
//         </Link>
//         <h4 className="font-semibold text-[40px] py-6">Contact</h4>
//         <div className="flex flex-wrap gap-16 items-center justify-between">
//         <div className="flex-1">
//           <p>123 Road</p>
//           <div className="flex items-center py-4">
//             <BsFillSendFill />
//             <p className="ml-2">codewithjakob</p>
//           </div>
//           <div className="flex items-center">
//             <BsTelephoneOutbound />
//             <p className="ml-2">0000-0000-00</p>
//           </div>
//           <div className="flex items-center pt-4">
//             <BiMessageDetail />
//             <p className="ml-2">codewithjakob</p>
//           </div>
//           </div>
//           <div className="flex-1 md:text-right">
//             <p className="pb-4">Our Story</p>
//             <p className="pb-4">Get in Touch</p>
//             <p className="pb-4">Our Privacy Commitment</p>
//             <p className="pb-4">Terms of service</p>
//             <p>Customer Assistance</p>
//           </div>
//           <div className="flex-1 md:text-right">
//             <p className="pb-4">Dining Experience</p>
//             <p className="pb-4">Wellness</p> 
//             <p className="pb-4">Fitness</p>
//             <p className="pb-4">Sports</p>
//             <p>Evnets</p> 
//           </div>
        
//         </div> 
//       </div>
//       <div className='bg-tertiary-light h-10 md:h-[70px] mt-16 w-full bottom-0 left-0' />
//     </footer>
//   );
// };

// export default Footer;












"use client";

import React from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { TbLetterX } from "react-icons/tb";

interface FooterProps {
  facebookUrl: string;
  instagramUrl: string;
  twitterUrl: string;
  phoneNumber: string;
  email: string;
}

const Footer: React.FC<FooterProps> = ({
  facebookUrl,
  instagramUrl,
  twitterUrl,
  phoneNumber,
  email,
}) => {
  return (
    <footer className="bg-gray py-8">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-3xl font-semibold mb-4 ">Contact Us</h2> 

        {/* Phone and Email */}
        <div className="flex space-x-6 mb-6">
          <a
            href={`tel:${phoneNumber}`}
            className=" flex items-center hover:text-green-400"
          >
            <FaPhoneAlt className="mr-2" />
           call: {phoneNumber}
          </a>
          <a
            href={`mailto:${email}`}
            className="flex items-center hover:text-yellow-300"
          >
            <FaEnvelope className="mr-2" />
             {email}
          </a>
        </div>

        <div className="flex space-x-6 mb-6">
          <a
            href={twitterUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-blue-300"
          >
            <FaSquareXTwitter className="mr-1" />
            X.com
          </a>
          <a
            href={facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-blue-500 cursor-pointer"
          >
            <FaFacebook className="mr-2" />
            Facebook
          </a>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-pink-500"
          >
            <FaInstagram className="mr-2" />
            Instagram
          </a>
        </div>
        <p className="text-sm">
          &copy; 2024 Your Hotel Booking. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
