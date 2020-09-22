import React from 'react'
import Layout from '../../components/Layout'
import ContactForm from '../../components/ContactForm';
import PageHeading from '../../components/PageHeading';



export default class Index extends React.Component {

  render() {
    return (
      <Layout>
        <div className="container is-fluid">
          <section className="section">
            <div className="container">
              <PageHeading title="Contact" />
              <div className="columns">
                <div className="column is-6">
                  <img className="rounded-md shadow-xl" src="https://images.unsplash.com/photo-1517520688650-28eb9304f326?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=628&q=80" alt="" />
                </div>
                <div className="column is-5 is-offset-1">
                  <div className="container">
                    <div className="content">
                      <ContactForm />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}
