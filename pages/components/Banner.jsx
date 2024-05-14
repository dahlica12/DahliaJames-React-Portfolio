"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslation } from 'next-i18next';


const Banner = () => {
  const { t, ready } = useTranslation();
  const [contentReady, setContentReady] = useState(false);

  useEffect(() => {
    if (ready) {
      setContentReady(true);
    }
  }, [ready]);

  if (!contentReady) {
    return <div>Loading...</div>; 
  }

  return (
    <section className="fullscreen-banner">
      <div className="video-container">
        <video
          autoPlay
          muted
          loop
          style={{
            position: "absolute",
            width: "100%",
            left: "50%",
            top: "50%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: -1
          }}
        >
          <source src="skybackground.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="grid grid-cols-1 sm:grid-cols-12 h-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="col-span-12 place-self-center text-center"
          >
            <h1 className="dark:text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold name-style">
              Dahlia James
            </h1>
            <TypeAnimation
              sequence={[t('banner.technicalSupport'), 2000, t('banner.softwareDevelopment'), 2000]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              className="text-lg text-pink-950"
            />
            <p className="quote-style">
            {t('banner.quote')}
            </p>
          </motion.div>
        </div>

        <div className="text-center absolute bottom-10 w-full">
          <Link href="/Dahlia_James_Resume.pdf" className="inline-flex items-center justify-center bg-gradient-to-r from-purple-500 to-blue-500 hover:from-blue-500 hover:to-purple-500 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 ease-in-out shadow-lg">
            <span className="ml-3">{t('banner.downloadResume')}</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;

