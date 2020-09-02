import React from 'react'

import Layout from '../../components/Layout'
import Cart from '../../components/bigcommerce/Cart'
import PageHeading from '../../components/PageHeading'

export default class CartIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <PageHeading title="Cart" />
        <section className="section">
          <div className="container">
            <div className="content">
              <Cart cartType="full" />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
