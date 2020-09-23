import React from "react";
import Layout from "../../components/Layout";
import ContactForm from "../../components/ContactForm";
import PageHeading from "../../components/PageHeading";

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <div className="container w-full px-4 sm:px-8 mb-10">
          <h1 className='text-2xl text-center font-bold text-gray-900 sm:text-5xl sm:leading-snug sm:truncate my-5 sm:my-10'>
            Contact
          </h1>
          <div className='sm:flex items-start'>
            <div className='hidden sm:flex w-full mt-8'>
              <img
                className='rounded-md shadow-xl'
                src='https://images.unsplash.com/photo-1517520688650-28eb9304f326?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=628&q=80'
                alt=''
              />
            </div>
            <div className='w-full mt-8 sm:ml-8'>
              <ContactForm />
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
