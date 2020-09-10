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
        metrics={data.contact || {}}
        content={widgetFor("body")}
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
