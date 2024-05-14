"use client";
import React, { useState, useEffect } from "react";
import { useTranslation } from 'next-i18next';
// import GithubIcon from "../../../public/github-icon.svg";
// import LinkedinIcon from "../../../public/linkedin-icon.svg";
import {
  AiFillLinkedin,
  AiFillYoutube,
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillTwitterCircle
} from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const { t, ready } = useTranslation();
  const [contentReady, setContentReady] = useState(false);
  
  
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  useEffect(() => {
    if (ready) {
      setContentReady(true);
    }
  }, [ready]);

  if (!contentReady) {
    return <div>Loading...</div>; 
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
      
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send/route";
    console.log(process.env.MAIL_USERNAME, process.env.MAIL_PASSWORD);

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section id="contact" className="bg-white dark:bg-[#222222] py-10 px-6 sm:px-10 lg:py-16 lg:px-12 rounded-xl shadow-xl mx-auto max-w-4xl"
             style={{
               color: '#333'
             }}>
      <div className="text-center mb-10">
        <h2 className="text-3xl leading-9 font-bold sm:text-4xl"
            style={{ color: '#554D4B' }}>
          {t('emailSection.title')}
        </h2>
        <p className="mt-4 text-lg text-gray-800">
        {t('emailSection.description')}
        </p>
      </div>
      {emailSubmitted ? (
        <div className="text-center">
          <p className="text-lg font-semibold" style={{ color: '#4A90E2' }}>
          {t('emailSection.emailSent')}
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            <div>
              <label htmlFor="email" className="block text-sm font-medium"
                     style={{ color: '#554D4B' }}>
                {t('emailSection.yourEmail')}
              </label>
              <input type="email" name="email" id="email" required
                     className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pink-500 focus:border-pink-900 transition duration-150 ease-in-out"
                     placeholder={t('emailSection.placeholderEmail')} />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium"
                     style={{ color: '#554D4B' }}>
                {t('emailSection.subject')}
              </label>
              <input type="text" name="subject" id="subject" required
                     className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pink-500 focus:border-pink-900 transition duration-150 ease-in-out"
                     placeholder={t('emailSection.placeholderSubject')} />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium"
                   style={{ color: '#554D4B' }}>
              {t('emailSection.message')}
            </label>
            <textarea name="message" id="message" rows="4"
                      className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pink-500 focus:border-pink-900 transition duration-150 ease-in-out"
                      placeholder={t('emailSection.placeholderMessage')}></textarea>
          </div>
          <div className="text-right">
            <button type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-pink-500 hover:bg-pink-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition duration-150 ease-in-out">
              {t('emailSection.sendMessage')}
            </button>
          </div>
        </form>
      )}
    </section>
  );
};

export default EmailSection;
