import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

function Footer() {
  return (
    <footer className="mt-30 py-5 shadow-lg bg-gradient-to-r from-gray-700 to-gray-500 text-white border-t-4 border-blue-500">
      <div className="mx-auto max-w-7xl">
        <div className="m-6 flex flex-wrap">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center transition-transform hover:scale-110">
                <Logo width="100px" />
              </div>
              <div>
                <p className="text-sm text-gray-300">
                  &copy; Copyright 2023. All Rights Reserved by DevUI.
                </p>
              </div>
            </div>
          </div>
          
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-gray-300 border-b border-blue-500 pb-2 inline-block">
                Company
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-white hover:text-blue-300 duration-200 transform hover:-translate-y-1 inline-block"
                    to="/"
                  >
                    Features
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-white hover:text-blue-300 duration-200 transform hover:-translate-y-1 inline-block"
                    to="/"
                  >
                    Pricing
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-white hover:text-blue-300 duration-200 transform hover:-translate-y-1 inline-block"
                    to="/"
                  >
                    Affiliate Program
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-medium text-white hover:text-blue-300 duration-200 transform hover:-translate-y-1 inline-block"
                    to="/"
                  >
                    Press Kit
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-gray-300 border-b border-blue-500 pb-2 inline-block">
                Support
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-white hover:text-blue-300 duration-200 transform hover:-translate-y-1 inline-block"
                    to="/"
                  >
                    Account
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-white hover:text-blue-300 duration-200 transform hover:-translate-y-1 inline-block"
                    to="/"
                  >
                    Help
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-white hover:text-blue-300 duration-200 transform hover:-translate-y-1 inline-block"
                    to="/"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-medium text-white hover:text-blue-300 duration-200 transform hover:-translate-y-1 inline-block"
                    to="/"
                  >
                    Customer Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-gray-300 border-b border-blue-500 pb-2 inline-block">
                Legals
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-white hover:text-blue-300 duration-200 transform hover:-translate-y-1 inline-block"
                    to="/"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-white hover:text-blue-300 duration-200 transform hover:-translate-y-1 inline-block"
                    to="/"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-medium text-white hover:text-blue-300 duration-200 transform hover:-translate-y-1 inline-block"
                    to="/"
                  >
                    Licensing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
