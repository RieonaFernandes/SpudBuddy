import React from "react";

const Footer = () => {
  return (
    <footer className=" bg-gray-800 text-white p-6 mt-10 border-orange-700 footer">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} All rights reserved.
        </p>
        <p className="text-sm mt-2">Designed by / Coded by Rieona Fernandes</p>
      </div>
    </footer>
  );
};

export default Footer;
