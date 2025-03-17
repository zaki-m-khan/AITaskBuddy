import React from "react";
import SocialIcon from "./SocialIcon";

function Footer() {
  return (
    <footer className="px-20 py-12 mt-12 bg-indigo-900 max-md:px-10 max-md:py-12">
      <div className="flex justify-between mx-auto my-0 max-w-screen-xl max-sm:flex-wrap max-sm:gap-8">
        <div className="flex-1 max-w-[296px] max-sm:flex-[1_1_100%]">
          <h3 className="mb-7 text-xl font-bold text-white">AI Task Buddy</h3>
          <p className="text-base text-indigo-200">
            Making work easier and more accessible for everyone.
          </p>
        </div>

        <div className="flex-1 max-w-[296px] max-sm:flex-[1_1_100%]">
          <h3 className="mb-7 text-xl font-bold text-white">Quick Links</h3>
          <ul className="p-0 list-none">
            <li className="mb-2">
              <a
                href="#"
                className="text-base text-indigo-200 no-underline hover:text-white transition-colors"
              >
                About Us
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="text-base text-indigo-200 no-underline hover:text-white transition-colors"
              >
                Features
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="text-base text-indigo-200 no-underline hover:text-white transition-colors"
              >
                Support
              </a>
            </li>
          </ul>
        </div>

        <div className="flex-1 max-w-[296px] max-sm:flex-[1_1_100%]">
          <h3 className="mb-7 text-xl font-bold text-white">Contact</h3>
          <ul className="p-0 list-none">
            <li className="mb-2 text-base text-indigo-200">
              Email: help@aitaskbuddy.com
            </li>
            <li className="mb-2 text-base text-indigo-200">
              Phone: (555) 123-4567
            </li>
          </ul>
        </div>

        <div className="flex-1 max-w-[296px] max-sm:flex-[1_1_100%]">
          <h3 className="mb-7 text-xl font-bold text-white">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" aria-label="Twitter">
              <SocialIcon type="twitter" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <SocialIcon type="linkedin" />
            </a>
            <a href="#" aria-label="Facebook">
              <SocialIcon type="facebook" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
