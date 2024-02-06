
import { Suspense, useState } from "react";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import SkillsSection from "./components/SkillsSection";
import HobbiesSection from "./components/HobbiesSection";
// import Head from "next/head";
// import { BsFillMoonStarsFill } from "react-icons/bs";
// import {
//   AiFillLinkedin,
//   AiFillYoutube,
//   AiFillFacebook,
//   AiFillGithub,
//   AiFillInstagram,
//   AiFillTwitterCircle,
// } from "react-icons/ai";
// import Image from "next/image";
// import profileImg from "../public/ProfileImg.jpg";
// import atlasIcon from "../public/AtlasBackground.jpg";
// import web1 from "../public/web1.png";
// import web2 from "../public/web2.png";
// import web3 from "../public/web3.png";
// import web4 from "../public/web4.png";
// import web5 from "../public/web5.png";
// import web6 from "../public/web6.png";

// import i18n from "./i18n";
// import LocaleContext from "./LocaleContext";
// import Welcome from "./Welcome";
// import { Contact } from "./contact.js";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faSquareXTwitter} from "@fortawesome/free-brands-svg-icons";
// import deved from '../public/dev-ed-wave.png';
// import Image from "next/image";
// import { Inter } from "next/font/google";
// import styles from "@/styles/Home.module.css";
// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  // function Loading() {
  //   return <>Loading</>;
  // }
  // const [locale, setLocale] = useState(i18n.language);
  // i18n.on("languageChanged", (lng) => setLocale(i18n.language));
  // const handleChange = (event) => {
  //   i18n.changeLanguage(event.target.value); //fr or eng
  // };

  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <Banner />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <HobbiesSection />
        <EmailSection />
      </div>
      <Footer />
    </main> 
  );
}
