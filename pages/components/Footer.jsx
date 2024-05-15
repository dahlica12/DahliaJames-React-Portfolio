import React from "react";

const Footer = () => {
  
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        {/* <span>LOGO</span> */}
        <p className="text-slate-600"> @dahliajamesportfolio.com {currentYear} All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
