"use client";
import React, { useState } from "react";
import Image from 'next/image';
const HobbiesSection = () => {
    const [selectedHobby, setSelectedHobby] = useState('');
    const [expandedHobby, setExpandedHobby] = useState(null);

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
      description: "I got into cooking a while back, spending time in the kitchen to experiment with different ingredients. It's my go-to activity for relaxation and creativity, especially when it comes to trying out various cuisines. Cooking has also become a way to connect with my family, as we share meals and explore new dishes together. ",
      images: [
        '/hobbies/pasta.jpg',
        '/hobbies/rice2.jpg',
        '/hobbies/palakpaneer.jpg',
        '/hobbies/paneer.jpg',
        '/hobbies/tacos.jpg',
        '/hobbies/brownies.jpg',
        '/hobbies/curry.jpg',
      ],
    },
    swimming: {
      title: "Swimming",
      description: "Ive been into swimming since my childhood, going to my local sports complex every month. Recently, Ive taken on the role of teaching a friend how to swim. Its turned out to be a straightforward and effective hobby, not just for staying in shape but also for spending quality time with friends..",
      images: ['/hobbies/swimming.jpg'], 
    },
    languages: {
      title: "Learning Languages",
      description: "Ive always been fascinated by languages, so Ive taken up learning Spanish and Hindi. Diving into these languages opens up new worlds for me, allowing me to appreciate different cultures and ways of thinking. Its a challenge, but its incredibly rewarding to slowly start understanding and communicating in another language.",
      images: ['/hobbies/languages.jpg'], 
    },
    camping: {
      title: "Camping/Hiking",
      description: "I've taken to camping for its blend of adventure and peace. It's all about the outdoors, from pitching tents to fireside meals, offering a fresh way to appreciate nature.",
      images: ['/hobbies/languages.jpg'], 
    },
    photography: {
      title: "Photography",
      description: "I've delved into photography, capturing moments and views that speak to me.",
      images: ['/hobbies/languages.jpg'], 
    },
  };

  const showModal = (hobby) => {
    setSelectedHobby(hobby);
  };

  const hideModal = () => {
    setSelectedHobby('');
  };

  const toggleHobby = (hobby) => {
    setExpandedHobby(expandedHobby === hobby ? null : hobby); // Collapse if already expanded, else expand
  };

    return (
        <section id="hobbies" className="mt-4 mb-8 md:mb-24">
      <h2 className="text-center text-4xl font-bold text-gray-800 dark:text-white mb-8">My Hobbies</h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(hobbiesInfo).map(([key, { title, description, images }]) => (
            <div key={key} className="hobby-card cursor-pointer rounded-lg shadow-lg overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-500 p-4 text-white transform transition duration-500 hover:scale-105">
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="text-sm mt-2">{description}</p>
              {expandedHobby === key && (
                <div className="mt-4 grid grid-cols-2 gap-2">
                  {images.map((src, index) => (
                    <div key={index} className="w-full h-32 relative">
                      <Image src={src} alt={`${title} ${index + 1}`} layout="fill" objectFit="cover" className="rounded-lg" />
                    </div>
                  ))}
                </div>
              )}
              <button onClick={() => toggleHobby(key)} className="mt-4 w-full bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-bold py-2 px-4 rounded-full transition-opacity duration-150 ease-in-out">
                {expandedHobby === key ? 'Hide Images' : 'Show Images'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
    )
    }
    export default HobbiesSection;