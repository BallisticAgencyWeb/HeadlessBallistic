import React from "react";
import { Link } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

class BlogItem extends React.Component {
  render() {
    const post = this.props.post;
    const columnWidth = this.props.columnWidth
      ? this.props.columnWidth
      : "is-6";

    return (
      <article>
        <p className="text-sm leading-5 text-gray-500">{post.frontmatter.date}</p>

        <Link className="block" to={post.fields.slug}>
          <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
            {post.frontmatter.title}
          </h3>

          <p className="mt-3 text-base leading-6 text-gray-500">{post.excerpt}</p>
        </Link>
        <div className="mt-3">
          <Link
            to={post.fields.slug}
            className="text-base leading-6 font-semibold text-ballistic-blue hover:text-ballistic-darkblue transition ease-in-out duration-150"
          >
            Read full story
          </Link>
        </div>
      </article>
    );
  }
}

export default BlogItem;
