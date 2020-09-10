import React from 'react'
import Layout from '../../components/Layout'
import ContactForm from '../../components/ContactForm';



export default class Index extends React.Component {

  render() {
    return (
      <Layout>
        <div className="container is-fluid">
          <section className="section">
            <div className="container">
              <h2 className="title has-text-centered">Contact Us</h2>
              <div className="columns">
                <div className="column is-6">
                  <img src="/img/architecture-blur.jpg" alt="" style={{borderRadius: "6px"}} />
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
