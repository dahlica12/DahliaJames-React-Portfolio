"use client";
import { useRouter } from 'next/router';
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import {
  AiFillLinkedin,
  AiFillYoutube,
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillTwitterCircle
} from "react-icons/ai";
import Link from "next/link";
const sectionData = [
  // {
  //   title: "Skills",
  //   id: "skills",
  //   content: (
  //     <ul className="list-disc pl-2">
  //       <li>Node.js</li>
  //       <li>Express</li>
  //       <li>PostgreSQL</li>
  //       <li>Sequelize</li>
  //       <li>JavaScript</li>
  //       <li>React</li>
  //     </ul>
  //   ),
  // },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Computer Science Technology. Champlain College, Saint-Lambert</li>
      </ul>
    ),
  },
  {
    title: "Achievements",
    id: "achievements",
    content: (
      <ul className="list-disc pl-2">
        <li>Deans List - 90% + average, Semester 1 </li>
        <li>Honours List - 85% + average, Semester 2</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("about");
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const navigateTo = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="py-12 px-4">
      <div className="container mx-auto flex flex-col md:flex-row gap-8 items-center justify-between">
        <div className="text-gray-800 dark:text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-base lg:text-lg mb-6">
            Hi, my name is Dahlia, and I&apos;m 20 years old. In my third year of Computer Science, I&apos;ve developed a genuine interest in IT Support and and Software Development. 
          Ive been lucky enough to work with JavaScript, React, Git, Java, and C# among other technologies, and I&apos;m always eager to expand my toolkit.
           I thrive  on the energy and creativity that come from teamwork and working together to solve problems. 
          With a positive attitude and always ready for a challenge, 
          I&apos;m eager to work on amazing applications and projects.
          </p>
        {sectionData.map((section) => (
            <div key={section.id} className="mb-4">
              <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
              {section.content}
            </div>
          ))}
        </div>
        <div className="flex-shrink-0 w-[200px] h-[200px] md:w-[330px] md:h-[330px] relative rounded-full overflow-hidden bg-gray-200 dark:bg-gray-800">
          <Image
           src="/images/dahliaphoto.JPG.png"
            alt="Dahlia James"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>

  );
};

export default AboutSection;
