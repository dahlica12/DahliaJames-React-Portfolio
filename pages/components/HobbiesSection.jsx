"use client";
import React, { useState } from "react";
import Image from 'next/image';
const HobbiesSection = () => {
    const [selectedHobby, setSelectedHobby] = useState('');

  // Array of cooking images
  const cookingImages = [
    '/hobbies/pasta.jpg',
    '/hobbies/rice2.jpg',
    '/hobbies/palakpaneer.jpg',
    '/hobbies/paneer.jpg',
    '/hobbies/tacos.jpg',
    '/hobbies/brownies.jpg',
    '/hobbies/curry.jpg',
  ];

  const hobbiesInfo = {
    cooking: {
      title: "Cooking",
      description: "Exploring culinary arts from various cultures.",
      images: cookingImages,
    },
    swimming: {
      title: "Swimming",
      description: "Swimming for fitness and relaxation in open waters and pools.",
      images: ['/hobbies/swimming.jpg'], // Assuming you have a placeholder image for swimming
    },
    languages: {
      title: "Learning Languages",
      description: "Diving into new languages and cultures to broaden my horizons.",
      images: ['/hobbies/languages.jpg'], // Assuming you have a placeholder image for languages
    },
  };

  const showModal = (hobby) => {
    setSelectedHobby(hobby);
  };

  const hideModal = () => {
    setSelectedHobby('');
  };
    return (
        <section id="hobbies" className="text-white mt-4 mb-8 md:mb-12">
          <h2 className="text-center text-4xl font-bold">
        My Hobbies
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {Object.entries(hobbiesInfo).map(([key, { title, images }]) => (
          <div key={key} className="hobby-card cursor-pointer" onClick={() => showModal(key)}>
            <Image src={images[0]} alt={title} layout="responsive" width={100} height={100} objectFit="cover" className="rounded-lg" />
            <h3 className="text-xl font-semibold mt-2">{title}</h3>
          </div>
        ))}
      </div>

      {/* Modal for selected hobby */}
      {selectedHobby && (
        <div className="modal-backdrop" onClick={hideModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-xl font-bold">{hobbiesInfo[selectedHobby].title}</h3>
            <p>{hobbiesInfo[selectedHobby].description}</p>
            <div className="grid grid-cols-3 gap-4 mt-4">
              {hobbiesInfo[selectedHobby].images.map((src, index) => (
                <Image key={index} src={src} alt={`${hobbiesInfo[selectedHobby].title} ${index + 1}`} width={250} height={250} objectFit="cover" />
              ))}
            </div>
            <button onClick={hideModal} className="mt-4 bg-white bg-opacity-50 hover:bg-opacity-70 text-black font-bold py-2 px-4 rounded-full transition-opacity duration-150 ease-in-out">Close</button>
          </div>
        </div>
      )}
        </section>
    )
    }
    export default HobbiesSection;