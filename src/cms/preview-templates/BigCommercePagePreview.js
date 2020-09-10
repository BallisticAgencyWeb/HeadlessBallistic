import React from "react";
import PropTypes from "prop-types";
import { BigCommercePageTemplate } from "../../templates/bigcommerce-page";

const BigCommercePagePreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return (
      <BigCommercePageTemplate
        mainpitch={data.mainpitch || {}}
        intro={data.intro || {}}
        contact={data.contact || {}}
        content={data.content || {}}
      />
    )
  } else {
    return <div>Loading...</div>
  }
};

BigCommercePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default BigCommercePagePreview;
