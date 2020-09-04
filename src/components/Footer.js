import React from "react";
import { Link } from "gatsby";

import logo from "../img/logo-footer.png";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import vimeo from "../img/social/vimeo.svg";

const Footer = class extends React.Component {
  render() {
    return (
      <div className="bg-ballistic-darkblue">
        <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="md:grid md:grid-cols-3 md:gap-16">
            <div className="md:col-span-2">
              <div className="w-full md:grid md:grid-cols-3 md:gap-8">
                <div>
                  <h4 className="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase">
                    Main
                  </h4>
                  <ul className="mt-4">
                    <li>
                      <Link
                        to="/about"
                        className="text-base leading-6 text-gray-300 hover:text-white"
                      >
                        About
                      </Link>
                    </li>
                    <li className="mt-4">
                      <Link
                        to="/products"
                        className="text-base leading-6 text-gray-300 hover:text-white"
                      >
                        Products
                      </Link>
                    </li>
                    <li className="mt-4">
                      <Link
                        to="/services"
                        className="text-base leading-6 text-gray-300 hover:text-white"
                      >
                        Services
                      </Link>
                    </li>
                    <li className="mt-4">
                      <Link
                        to="/blog"
                        className="text-base leading-6 text-gray-300 hover:text-white"
                      >
                        Blog
                      </Link>
                    </li>
                    <li className="mt-4">
                      <Link
                        to="/contact"
                        className="text-base leading-6 text-gray-300 hover:text-white"
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h4 className="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase">
                    Services
                  </h4>
                  <ul className="mt-4">
                    <li>
                      <Link
                        to="/services/volusion-to-bigcommerce-migration/"
                        className="text-base leading-6 text-gray-300 hover:text-white"
                      >
                        Volusion to BigCommerce Migration
                      </Link>
                    </li>
                    <li className="mt-4">
                      <Link
                        to="/services/site-search-optimization/"
                        className="text-base leading-6 text-gray-300 hover:text-white"
                      >
                        Site Search Optimization
                      </Link>
                    </li>
                    <li className="mt-4">
                      <Link
                        to="/services/research-and-analytics/"
                        className="text-base leading-6 text-gray-300 hover:text-white"
                      >
                        Research and Analytics
                      </Link>
                    </li>
                    <li className="mt-4">
                      <Link
                        to="/services/email-marketing/"
                        className="text-base leading-6 text-gray-300 hover:text-white"
                      >
                        Email Marketing
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="mt-10">
                    <li>
                      <Link
                        to="/services/search-engine-optimization/"
                        className="text-base leading-6 text-gray-300 hover:text-white"
                      >
                        Search Engine Optimization
                      </Link>
                    </li>
                    <li className="mt-4">
                      <Link
                        to="/services/ecommerce-site-design/"
                        className="text-base leading-6 text-gray-300 hover:text-white"
                      >
                        eCommerce Site Design
                      </Link>
                    </li>
                    <li className="mt-4">
                      <Link
                        to="/services/conversion-rate-optimization/"
                        className="text-base leading-6 text-gray-300 hover:text-white"
                      >
                        Conversion Rate Optimization
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-8 xl:mt-0">
              <h4 className="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase">
                Subscribe to our newsletter
              </h4>
              <p className="mt-4 text-gray-300 text-base leading-6">
                The latest news, articles, and resources, sent to your inbox
                weekly.
              </p>
              <form className="mt-4 sm:flex sm:max-w-md">
                <input
                  aria-label="Email address"
                  type="email"
                  required
                  className="appearance-none w-full px-5 py-3 border border-transparent text-base leading-6 rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 transition duration-150 ease-in-out"
                  placeholder="Enter your email"
                />
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                  <button className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md primary-btn transition duration-150 ease-in-out">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
           <p className="mt-8 text-base leading-6 text-gray-400 md:mt-0 md:order-1">
              © 2020 Ballistic Agency All rights reserved.
            </p>
          </div>
        </div>
      </div>
    );
  }
};

export default Footer;
