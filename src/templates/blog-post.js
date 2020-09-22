import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import Wistia from "../components/Wistia";

export const BlogPostTemplate = ({
  content,
  contentComponent,
  tags,
  title,
  helmet,
  wistiaid,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section className='section'>
      {helmet || ""}
      <div className='container '>
        <div className='columns'>
          <div className='column is-10 is-offset-1'>
            {wistiaid && (
              <div className='mb-10'>
                <Wistia id={wistiaid} />
              </div>
            )}
            <h1 className='title is-size-2 has-text-weight-bold is-bold-light'>
              {title}
            </h1>
            <div className='content'>
              <PostContent content={content} />
            </div>
            {tags && tags.length ? (
              <div className='mt-4'>
                <h4 className='text-xl leading-9 font-extrabold tracking-tight sm:text-2xl'>
                  Tags
                </h4>
                <ul className='list-none m-0 p-0 '>
                  {tags.map((tag) => (
                    <li className="mr-2 mt-2 float-left" key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>
                        <span className='inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 bg-indigo-100 text-indigo-800'>
                          <svg
                            className='-ml-1 mr-1.5 h-2 w-2 text-indigo-400'
                            fill='currentColor'
                            viewBox='0 0 8 8'
                          >
                            <circle cx={4} cy={4} r={3} />
                          </svg>
                          {tag}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  wistiaid: PropTypes.any,
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate='%s | Blog'>
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name='description'
              content={`${post.frontmatter.description}`}
            />
            <link rel="alternate" href="http://example.com" hreflang="en-us" />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        wistiaid={post.frontmatter.wistiaid}
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        wistiaid
      }
    }
  }
`;
