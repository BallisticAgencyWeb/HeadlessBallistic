import React from "react";
import Layout from "../../components/Layout";
import { Link } from "gatsby";
import Customers from "../../components/Customers";

export default () => (
  <Layout>
    <section>
      <div className="">
        <div className="py-8 bg-gray-50 overflow-hidden">
          <div className="relative mx-auto max-w-7xl p-4 sm:p-6">
            <svg
              className="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4"
              width={404}
              height={784}
              fill="none"
              viewBox="0 0 404 784"
            >
              <defs>
                <pattern
                  id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={784}
                fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
              />
            </svg>
            <div className="relative mb-40">
              <div className="m-auto text-center flex justify-center mb-16">
                <img
                  className="max-h-24"
                  src="/img/bigcommerce-logo-dark.svg"
                  alt="BigCommerce"
                />
              </div>
              <h3 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                A Great Partnership
              </h3>
              <p className="mt-4 max-w-3xl mx-auto text-center text-xl leading-7 text-gray-500">
                Building and supporting BigCommerce sites since 2011.
              </p>
              <div className="mt-10">
                <Link
                  className="w-full max-w-xs m-auto flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md primary-btn transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                  href="/services"
                >
                  Get in touch
                </Link>
              </div>
            </div>
            <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div className="relative">
                <p className="text-lg leading-6 text-ballistic-yellow  font-bold tracking-wide uppercase">
                  Trust
                </p>
                <h1 className="mt-2 mb-8 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                  Why choose Ballistic Agency
                </h1>

                <p className="mt-3 text-lg leading-7 text-gray-500">
                  If you're looking for something a little more custom, need
                  integration with an existing system like Quickbooks, SAP, or
                  another application, or you have thousands of products and
                  years of data to migrate, you need a web design agency.
                </p>

                <p className="mt-3 text-base leading-7 text-gray-500">
                  It's never been easier to build an eCommerce website for
                  yourself. Going with a simple, template-based approach works
                  well for many small companies and startups. BigCommerce is an
                  excellent choice for beginners for this very reason, but you
                  might need more.
                </p>

                <p className="mt-3 text-base leading-7 text-gray-500">
                  Since 2008, Ballistic Agency has specialized in building
                  websites for businesses just like yours. Since 2011, we've
                  built BigCommerce sites to the specific needs of our clients.
                  We include your unique branding, SEO, CRO, marketing strategy,
                  and integration needs. Our process is well thought out and
                  tested through many years of experience, which helps us move
                  projects through the development cycle faster than most other
                  agencies. The result is a site that ranks higher, works
                  better, and sells more.
                </p>

                <p className="mt-3 text-base leading-7 text-gray-500">
                  Simply put, you hire Ballistic Agency to build your custom
                  BigCommerce site sooner than other agencies so that you can
                  quickly reach your eCommerce goals.
                </p>
                <div className="flex text-base max-w-prose mx-auto lg:max-w-none mt-6">
                  <div className="rounded-md shadow">
                    <Link
                      to="/contact"
                      className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md primary-btn focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out"
                    >
                      Contact sales
                    </Link>
                  </div>
                  <div className="rounded-md shadow ml-4">
                    <Link
                      to="/about"
                      className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md secondary-btn focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo transition duration-150 ease-in-out"
                    >
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
              <div className="mt-10 -mx-4 relative lg:mt-0">
                <svg
                  className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
                  width={784}
                  height={404}
                  fill="none"
                  viewBox="0 0 784 404"
                >
                  <defs>
                    <pattern
                      id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x={0}
                        y={0}
                        width={4}
                        height={4}
                        className="text-gray-200"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={784}
                    height={404}
                    fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"
                  />
                </svg>
                <img
                  className="relative mx-auto"
                  src="/img/ba_bcpartner_tile-main.png"
                  alt
                  width={410}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative pt-0">
        <Customers />
      </div>
    </section>
  </Layout>
);
