import React from "react";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";
import PageHeading from "../../components/PageHeading";
import ServiceRoll from "../../components/ServiceRoll";

export default class ServicesIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <PageHeading title="Optimized eCommerce" />
        <section className="section">
          <div className="relative max-w-lg mx-auto lg:max-w-7xl">
            <ServiceRoll />
          </div>
        </section>
      </Layout>
    );
  }
}
