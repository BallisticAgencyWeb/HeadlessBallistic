import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import Customers from "../components/Customers";
import { HTMLContent } from "../components/Content";

import BlogItem from "../components/BlogItem";
import Wistia from "../components/Wistia";

export const IndexPageTemplate = ({
  mainpitch,
  introcontent,
  metrics,
  content,
  posts,
}) => (
  <div>
    <div className="relative bg-gray-50 overflow-hidden">
      <div className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full">
        <div className="relative h-full max-w-screen-xl mx-auto">
          <svg
            className="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
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
              fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
            />
          </svg>
          <svg
            className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
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
              fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
            />
          </svg>
        </div>
      </div>
      <div className="relative pt-0 pb-12 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
        <main className="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
              {mainpitch.title}
            </h2>
            <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-lg md:mt-5 md:text-2xl md:max-w-3xl">
              {mainpitch.subtitle}
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <Link
                  to="/services"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md primary-btn transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                >
                  View Services
                </Link>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <Link
                  to="/contact"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md secondary-btn focus:outline-none transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    <div className="relative pt-0">
      <Customers />
    </div>
    <div className="relative pt-0">
      <main className="mx-auto">
        <div className="py-16 overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-base max-w-prose mx-auto lg:max-w-none">
              <p className="text-lg leading-6 text-ballistic-yellow  font-bold tracking-wide uppercase">
                {introcontent.subtitle}
              </p>
              <h1 className="mt-2 mb-8 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                {introcontent.title}
              </h1>
            </div>
            <div className="relative z-10 text-base max-w-prose mx-auto mb-8 lg:max-w-5xl lg:mx-0 lg:pr-72">
              <p className="text-lg text-gray-500 leading-7">
                {introcontent.description}
              </p>
            </div>
            <div className="lg:flex lg:flex-row-reverse">
              <div className="relative text-base max-w-prose mx-auto lg:max-w-none lg:ml-16">
                <svg
                  className="absolute top-0 right-0 -mt-20 -mr-20 lg:top-auto lg:right-auto lg:bottom-1/2 lg:left-1/2 lg:mt-0 lg:mr-0 xl:top-0 xl:right-0 xl:-mt-20 xl:-mr-20"
                  width={404}
                  height={384}
                  fill="none"
                  viewBox="0 0 404 384"
                >
                  <defs>
                    <pattern
                      id="bedc54bc-7371-44a2-a2bc-dc68d819ae60"
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
                    height={384}
                    fill="url(#bedc54bc-7371-44a2-a2bc-dc68d819ae60)"
                  />
                </svg>
                <div
                  style={{ width: "40rem", maxWidth: "100%" }}
                  className="relative bg-white rounded-lg shadow-lg overflow-hidden mx-w-full lg:mt-8"
                >
                  <Wistia id={introcontent.wistiaid} />
                </div>
              </div>
              <div className="relative z-10 mb-12 lg:mb-0">
                <div className="mb-10 prose text-gray-500 mx-auto lg:max-w-none">
                  <HTMLContent content={content} />
                </div>
                <div className="flex text-base max-w-prose mx-auto lg:max-w-none">
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
            </div>
          </div>
        </div>
      </main>
    </div>

    <div className="bg-ballistic-darkblue">
      <div className="max-w-screen-xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl leading-9 font-extrabold text-white sm:text-4xl sm:leading-10">
            {metrics.title}
          </h2>
          <p className="mt-3 text-xl leading-7 text-indigo-200 sm:mt-4">
            {metrics.subtitle}
          </p>
        </div>
        <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
          <div className="flex flex-col">
            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-ballistic-lightblue">
              {metrics.metric1.label}
            </dt>
            <dd className="order-1 text-5xl leading-none font-extrabold text-white">
              {metrics.metric1.value}
            </dd>
          </div>
          <div className="flex flex-col mt-10 sm:mt-0">
            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-ballistic-lightblue">
              {metrics.metric2.label}
            </dt>
            <dd className="order-1 text-5xl leading-none font-extrabold text-white">
              {metrics.metric2.value}
            </dd>
          </div>
          <div className="flex flex-col mt-10 sm:mt-0">
            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-ballistic-lightblue">
              {metrics.metric3.label}
            </dt>
            <dd className="order-1 text-5xl leading-none font-extrabold text-white">
              {metrics.metric3.value}
            </dd>
          </div>
        </dl>
      </div>
    </div>

    <div className="relative py-16">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex-1 min-w-0">
            <h2 className="text-xl font-bold leading-7 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate">
              From The Blog
            </h2>
          </div>
          <div className="mt-4 flex md:mt-0 md:ml-4">
            <Link
              to="/blog"
              className="inline-block align-baseline font-bold text-base text-ballistic-lightblue hover:text-blue-800"
            >
              View Blog →
            </Link>
          </div>
        </div>
        <div className="border-t-2 border-gray-100 pt-10 mt-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:col-gap-5 lg:row-gap-12">
            {posts && posts.map(({ node: post }) => <BlogItem post={post} />)}
          </div>
        </div>
      </main>
    </div>

    <div className="relative bg-ballistic-darkblue">
      <div className="h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1522071901873-411886a10004?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          alt="Support team"
        />
      </div>
      <div className="relative max-w-screen-xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="md:ml-auto md:w-1/2 md:pl-10">
          <div className="text-base leading-6 font-semibold uppercase tracking-wider text-gray-300">
            Empathy works
          </div>
          <h2 className="mt-2 text-white text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10">
            How we understand our clients
          </h2>
          <p className="mt-3 text-lg leading-7 text-gray-300">
            We’re not only an eCommerce agency, we’re a manufacturer that sells
            our products online. We labor over our search engine rankings, we
            advertise, we manufacture products and maintain stock levels, we
            pull inventory, we package and ship products, and we handle
            payments, returns, refunds, and more. Why? One word: empathy. We
            wanted to understand our clients so we started doing what they do.
          </p>
          <div className="mt-8">
            <div className="inline-flex rounded-md shadow">
              <Link
                to="/products"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-gray-900 bg-white hover:text-gray-600 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
              >
                Visit our product catalog
                <svg
                  className="-mr-1 ml-3 h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  mainpitch: PropTypes.object,
  introcontent: PropTypes.object,
  posts: PropTypes.object,
  content: PropTypes.string,
  metrics: PropTypes.object,
};

const IndexPage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        title={frontmatter.title}
        mainpitch={frontmatter.mainpitch}
        introcontent={frontmatter.introcontent}
        metrics={frontmatter.metrics}
        content={html}
        posts={data.allMarkdownRemark.edges}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      html
      frontmatter {
        title
        mainpitch {
          title
          subtitle
        }
        introcontent {
          subtitle
          title
          description
          wistiaid
        }
        metrics {
          title
          subtitle
          metric1 {
            label
            value
          }
          metric2 {
            label
            value
          }
          metric3 {
            label
            value
          }
        }
      }
    }
    allMarkdownRemark(
      sort: {
        order: DESC
        fields: [frontmatter___featuredpost, frontmatter___date]
      }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
      limit: 2
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            featuredpost
            featuredimage {
              childImageSharp {
                fluid(maxWidth: 120, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
