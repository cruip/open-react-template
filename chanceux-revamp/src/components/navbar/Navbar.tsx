import React from "react";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center px-6 md:px-20 pt-3 md:pt-6">
      {/* logo */}
      <div>Logo</div>
      {/* links */}
      <div className="hidden md:flex items-center gap-8">
        <ul className="grid grid-cols-4 gap-8">
          <li>
            <a className="text-lg font-medium capitalize" href="/">
              home
            </a>
          </li>
          <li>
            <a className="text-lg font-medium capitalize" href="about">
              about
            </a>
          </li>
          <li>
            <a className="text-lg font-medium capitalize" href="services">
              services
            </a>
          </li>
          <li>
            <a className="text-lg font-medium capitalize" href="contact">
              contact
            </a>
          </li>
        </ul>
        <button className="text-lg capitalize rounded-lg bg-purple-600 h-fit w-fit py-2 px-10">
          lets talk
        </button>
      </div>
      <button className="block md:hidden">menuIcon</button>
    </header>
  );
};

export default Navbar;
