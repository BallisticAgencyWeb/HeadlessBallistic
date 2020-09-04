import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import PageHeading from "../components/PageHeading";
import Wistia from "../components/Wistia";

export const ServicesPostTemplate = ({
  content,
  contentComponent,
  description,
  title,
  helmet,
  featuredimage,
  wistiaid
}) => {
  const PostContent = contentComponent || Content;

  return (
    <div>
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
        {helmet || ""}

        <div class="text-base max-w-prose mx-auto lg:max-w-none">
          <p class="text-lg leading-6 text-ballistic-yellow  font-bold tracking-wide uppercase">
            Service:
          </p>
          <h1 class="mt-2 mb-8 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            {title}
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div class="block col-span-2">
            {wistiaid && <div className="mb-6"><Wistia id={wistiaid} /></div>}
            <PostContent content={content} />
          </div>
          <div className="block col-span-1">
            <div class="rounded shadow overflow-hidden">
              <PreviewCompatibleImage
                imageInfo={{
                  image: featuredimage,
                  alt: `featured image thumbnail for post ${title}`,
                }}
                classes="max-w-sm"
              />
            </div>
            <span className="block w-full rounded-md shadow-sm mt-4">
              <Link
                to="/contact"
                className="inline-flex w-full items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md focus:outline-none  primary-btn transition ease-in-out duration-150"
              >
                <svg
                  className="-ml-1 mr-3 h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Contact
              </Link>
            </span>
          </div>
        </div>
        <div className="bg-white">
          <div className="max-w-screen-xl mx-auto pt-8 pb-4">
            <div className="px-6 py-6 bg-ballistic-darkblue rounded-lg md:py-12 md:px-12 lg:py-16 lg:px-16 xl:flex xl:items-center">
              <div className="xl:w-0 xl:flex-1">
                <h2 className="text-2xl leading-8 font-extrabold tracking-tight text-white sm:text-3xl sm:leading-9">
                  Want eCommerce news and updates?
                </h2>
                <p
                  className="mt-3 max-w-3xl text-lg leading-6 text-indigo-200"
                  id="newsletter-headline"
                >
                  Sign up for our newsletter to stay up to date.
                </p>
              </div>
              <div className="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
                <form className="sm:flex" aria-labelledby="newsletter-headline">
                  <input
                    aria-label="Email address"
                    type="email"
                    required
                    className="appearance-none w-full px-5 py-3 border border-transparent text-base leading-6 rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 transition duration-150 ease-in-out"
                    placeholder="Enter your email"
                  />
                  <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                    <button className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md secondary-btn transition duration-150 ease-in-out">
                      Notify me
                    </button>
                  </div>
                </form>
                <p className="mt-3 text-sm leading-5 text-indigo-200">
                  We care about the protection of your data. Read our
                  <a href="#" className="text-white font-medium underline pl-1">
                    Privacy Policy.
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

ServicesPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  featuredimage: PropTypes.object,
  wistiaid: PropTypes.string
};

const ServicesPost = ({ data }) => {
  const { markdownRemark: post } = data;

  console.log(post);

  return (
    <Layout>
      <ServicesPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        featuredimage={post.frontmatter.featuredimage}
        wistiaid={post.frontmatter.wistiaid}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

ServicesPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default ServicesPost;

export const pageQuery = graphql`
  query ServicesPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        wistiaid
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 300, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
