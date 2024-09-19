 
// pages/about.tsx
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto my-16 px-6">
      {/* About Section */}
      <section className="mb-12">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="text-lg text-gray-600 mt-4">
            Welcome to Hotel Jay Kalyan, where comfort meets luxury. Located in the heart of New York, we provide a unique blend of modern hospitality and personalized services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-gray-600 mb-4">
            At Hotel Jay Kalyan, we believe in providing an unforgettable experience for all our guests. Whether you're visiting for business or leisure, we offer world-class amenities, comfortable rooms, and excellent service. Our location in the downtown area provides easy access to major attractions, making your stay even more enjoyable.
          </p> 
        </div>
      </section>
      
      {/* Contact Section */}
      <section>
        <div className="text-center mb-6">
          <h2 className="text-4xl font-bold">Contact Us</h2>
          <p className="text-lg text-gray-600">We re here to help! Feel free to reach out to us.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Our Contact Information</h3>
            <p className="text-lg mb-4">
              We are available 24/7 for any inquiries or assistance you may need. Contact us via the details below or visit us at our location.
            </p>

            <div className="mb-6">
              <h4 className="text-xl font-semibold mb-2">Address:</h4>
              <p className="text-lg text-gray-600">
                Hotel Jay Kalyan<br />
                123 Main Street, Downtown<br />
                New York, NY 10001, USA
              </p>
            </div>

            <div className="mb-6">
              <h4 className="text-xl font-semibold mb-2">Phone:</h4>
              <p className="text-lg text-gray-600">
                General Inquiries: <a href="tel:+1234567890" className="text-blue-500">+1 234-567-890</a><br />
                Booking Support: <a href="tel:+0987654321" className="text-blue-500">+1 098-765-4321</a>
              </p>
            </div>

            <div className="mb-6">
              <h4 className="text-xl font-semibold mb-2">Email:</h4>
              <p className="text-lg text-gray-600">
                General Inquiries: <a href="mailto:info@jaykalyan.com" className="text-blue-500">info@jaykalyan.com</a><br />
                Booking Support: <a href="mailto:support@jaykalyan.com" className="text-blue-500">support@jaykalyan.com</a>
              </p>
            </div>
          </div> 
        </div>
      </section>
    </div>
  );
};

export default Contact;
