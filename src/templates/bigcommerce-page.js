import React from "react";
import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import ContactForm from "../components/ContactForm";
import Customers from "../components/Customers";


export const BigCommercePageTemplate = ({
  mainpitch,
  intro,
  contact,
  content,
}) => {

  return (
    <div>
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
                  {mainpitch.title}
                </h3>
                <p className="mt-4 max-w-3xl mx-auto text-center text-xl leading-7 text-gray-500">
                  {mainpitch.subtitle}
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
                    {intro.subtitle}
                  </p>
                  <h1 className="mt-2 mb-8 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                    {intro.title}
                  </h1>

                  <p className="mt-3 text-lg leading-7 text-gray-500">
                    {intro.description}
                  </p>

                  <p className="mt-3 text-base leading-7 text-gray-500">
                    <HTMLContent content={content} />
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
              <div className="relative mt-16 sm:mt-24 lg:mt-40">
                <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
                  <div className="lg:col-start-1 mt-10 relative lg:mt-0">
                    <p className="mt-3 text-lg leading-7 text-gray-500">
                      <HTMLContent content={contact} />
                    </p>
                  </div>
                  <div className="mt-16 lg:mt-0 lg:col-start-2">
                    <div className="max-w-lg">
                      <div className="sm:px-6">
                        <p className="text-lg leading-6 text-ballistic-yellow  font-bold tracking-wide uppercase">
                          Contact
                        </p>
                        <h2 className="mt-2 mb-8 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                          Get in touch
                        </h2>
                        <ContactForm />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative pt-0">
          <Customers />
        </div>
      </section>
    </div>
  );
};

BigCommercePageTemplate.propTypes = {
  mainpitch: PropTypes.object,
  intro: PropTypes.object,
  contact: PropTypes.string,
  content: PropTypes.string,
};

const BigCommercePage = ({ data }) => {
  const { markdownRemark } = data;

  return (
    <Layout>
      <BigCommercePageTemplate
        mainpitch={markdownRemark.frontmatter.mainpitch}
        intro={markdownRemark.frontmatter.intro}
        contact={markdownRemark.frontmatter.contact}
        content={markdownRemark.html}
      />
    </Layout>
  );
};

BigCommercePage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default BigCommercePage;

export const bigcommercePageQuery = graphql`
  query BigCommercePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        mainpitch {
          title
          subtitle
        }
        intro {
          subtitle
          title
          description
        }
        contact
      }
    }
  }
`;
