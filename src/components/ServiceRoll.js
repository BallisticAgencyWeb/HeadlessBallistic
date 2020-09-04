import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import BlogItem from "./BlogItem";
import ServiceItem from "./ServiceItem";

class ServicesRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div className="border-t-2 border-gray-100 pt-10 mt-6">
        <div className="grid gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:col-gap-5 lg:row-gap-12">
          {posts && posts.map(({ node: post }) => <ServiceItem post={post} />)}
        </div>
      </div>
    );
  }
}

ServicesRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query ServicesRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "service-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 100)
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
                    fluid(maxWidth: 300, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <ServicesRoll data={data} count={count} />}
  />
);
