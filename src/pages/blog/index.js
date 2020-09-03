import React from "react";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";
import PageHeading from "../../components/PageHeading";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <PageHeading title="Blog" />
        <section className="section">
          <div className="relative max-w-lg mx-auto lg:max-w-7xl">
            <div>
              <h2 className="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-3xl sm:leading-10">
                Subscribe
              </h2>
              <div className="mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center">
                <p className="text-xl leading-7 text-gray-500">
                  Get weekly articles in your inbox on eCommerce.
                </p>
                <form className="mt-6 flex lg:mt-0 lg:justify-end">
                  <input
                    aria-label="Email address"
                    type="email"
                    required
                    className="appearance-none w-full px-4 py-2 border border-gray-300 text-base leading-6 rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out lg:max-w-xs"
                    placeholder="Enter your email"
                  />
                  <span className="ml-3 flex-shrink-0 inline-flex rounded-md shadow-sm">
                    <button
                      type="button"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
                    >
                      Notify me
                    </button>
                  </span>
                </form>
              </div>
            </div>
            <BlogRoll />
          </div>
        </section>
      </Layout>
    );
  }
}
