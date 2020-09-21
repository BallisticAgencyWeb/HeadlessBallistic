import React from "react";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";
import PageHeading from "../../components/PageHeading";
import ServiceRoll from "../../components/ServiceRoll";

export default class ServicesIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <PageHeading title="Services" />
        <section className="section">
          <div className="relative max-w-lg mx-auto lg:max-w-7xl">
            <div>
              <h2 className="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-3xl sm:leading-10">
                Optimized eCommerce™ Services
              </h2>
            </div>
            <ServiceRoll />
          </div>
        </section>
      </Layout>
    );
  }
}
