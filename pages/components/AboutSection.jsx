"use client";
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
const TAB_DATA = [
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
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/setup-desk.jpg" alt="Set up desk" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          Hi, my name is Dahlia, and Im 20 years old. In my third year of Computer Science, 
          Ive developed a genuine interest in IT Support and Software Development. 
          Ive been lucky enough to work with JavaScript, React, Git, Java, and C# among other technologies, and Im always eager to expand my toolkit.
           I thrive  on the energy and creativity that come from teamwork and working together to solve problems. 
          With a positive attitude and always ready for a challenge, 
          Im eager to work on amazing applications and projects.
          </p>
          <div className="flex flex-row justify-start mt-8">
            {/* <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton> */}
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("achievements")}
              active={tab === "achievements"}
            >
              {" "}
              Achievements{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {/* {TAB_DATA.find((t) => t.id === tab).content} */}
          </div>
         
        </div>
        
      </div>
      <div className="socials flex flex-row gap-2">
          <div className="py-10 mt-12 text-3xl items-center justify-between md:text-5xl flex flex-wrap lg:flex-row lg:flex-wrap text-blue-950 ">
              <a
                href="https://github.com/dahlica12"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/dahlia-jo-james/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillLinkedin />
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillYoutube />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100015895356257"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillFacebook />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillTwitterCircle />
              </a>
              {/* <FontAwesomeIcon icon={faSquareXTwitter} /> */}
            </div>
        </div>
    </section>
  );
};

export default AboutSection;
