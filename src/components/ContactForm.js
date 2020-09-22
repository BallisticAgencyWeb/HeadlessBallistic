import React from "react";
import { navigate } from "gatsby-link";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (window.freshsales) {
      window.freshsales.trackEvent(
        {
          email: this.state.email,
          title: "Contact Us Filled Out",
        },
        "Contact Us Filled Out"
      );
    }
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch((error) => alert(error));
  };

  render() {
    return (
      <form
        name='contact'
        method='post'
        action='/contact/thanks/'
        data-netlify='true'
        data-netlify-honeypot='bot-field'
        onSubmit={this.handleSubmit}
        className='grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8'
      >
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type='hidden' name='form-name' value='contact' />
        <div hidden>
          <label>
            Don’t fill this out:{" "}
            <input name='bot-field' onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <label
            htmlFor='first_name'
            className='block text-sm font-medium leading-5 text-gray-700'
          >
            First name
          </label>
          <div className='mt-1 relative rounded-md shadow-sm'>
            <input
              id='first_name'
              className='form-input block w-full transition ease-in-out duration-150 sm:text-sm sm:leading-5'
              onChange={this.handleChange}
              name="first_name"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor='last_name'
            className='block text-sm font-medium leading-5 text-gray-700'
          >
            Last name
          </label>
          <div className='mt-1 relative rounded-md shadow-sm'>
            <input
              id='last_name'
              className='form-input block w-full transition ease-in-out duration-150 sm:text-sm sm:leading-5'
              onChange={this.handleChange}
              name="last_name"
            />
          </div>
        </div>
        <div className='sm:col-span-2'>
          <label
            htmlFor='email'
            className='block text-sm font-medium leading-5 text-gray-700'
          >
            Email
          </label>
          <div className='mt-1 relative rounded-md shadow-sm'>
            <input
              id='email'
              type='email'
              className='form-input block w-full transition ease-in-out duration-150 sm:text-sm sm:leading-5'
              onChange={this.handleChange}
              name="email"
            />
          </div>
        </div>
        <div className='sm:col-span-2'>
          <label
            htmlFor='company'
            className='block text-sm font-medium leading-5 text-gray-700'
          >
            Company
          </label>
          <div className='mt-1 relative rounded-md shadow-sm'>
            <input
              id='company'
              className='form-input block w-full transition ease-in-out duration-150 sm:text-sm sm:leading-5'
              onChange={this.handleChange}
              name="company"
            />
          </div>
        </div>
        <div className='sm:col-span-2'>
          <div className='flex justify-between'>
            <label
              htmlFor='phone'
              className='block text-sm font-medium leading-5 text-gray-700'
            >
              Phone
            </label>
            <span className='text-sm leading-5 text-gray-500'>Optional</span>
          </div>
          <div className='mt-1 relative rounded-md shadow-sm'>
            <input
              id='phone'
              className='form-input block w-full transition ease-in-out duration-150 sm:text-sm sm:leading-5'
              onChange={this.handleChange}
              name="phone"
            />
          </div>
        </div>
        <div className='sm:col-span-2'>
          <div className='flex justify-between'>
            <label
              htmlFor='how_can_we_help'
              className='block text-sm font-medium leading-5 text-gray-700'
            >
              How can we help you?
            </label>
            <span className='text-sm leading-5 text-gray-500'>
              Max. 500 characters
            </span>
          </div>
          <div className='mt-1 relative rounded-md shadow-sm'>
            <textarea
              id='how_can_we_help'
              rows={4}
              className='form-textarea block w-full transition ease-in-out duration-150 sm:text-sm sm:leading-5'
              defaultValue={""}
              onChange={this.handleChange}
              name="how_can_we_help_you"
            />
          </div>
        </div>
        <fieldset className='sm:col-span-2'>
          <legend className='block text-sm font-medium leading-5 text-gray-700'>
            Expected budget
          </legend>
          <div className='mt-4 grid grid-cols-1 gap-y-4'>
            <div className='flex items-center'>
              <input
                id='budget_under_25k'
                name='budget'
                defaultValue='under_25k'
                type='radio'
                className='form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out'
                onChange={this.handleChange}
              />
              <label htmlFor='budget_under_25k' className='ml-3'>
                <span className='block text-sm leading-5 text-gray-700'>
                  Less than $25K
                </span>
              </label>
            </div>
            <div className='flex items-center'>
              <input
                id='budget_25k-50k'
                name='budget'
                defaultValue='25k-50k'
                type='radio'
                className='form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out'
                onChange={this.handleChange}
              />
              <label htmlFor='budget_25k-50k' className='ml-3'>
                <span className='block text-sm leading-5 text-gray-700'>
                  $25K – $50K
                </span>
              </label>
            </div>
            <div className='flex items-center'>
              <input
                id='budget_50k-100k'
                name='budget'
                defaultValue='50k-100k'
                type='radio'
                className='form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out'
                onChange={this.handleChange}
              />
              <label htmlFor='budget_50k-100k' className='ml-3'>
                <span className='block text-sm leading-5 text-gray-700'>
                  $50K – $100K
                </span>
              </label>
            </div>
            <div className='flex items-center'>
              <input
                id='budget_over_100k'
                name='budget'
                defaultValue='over_100k'
                type='radio'
                className='form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out'
                onChange={this.handleChange}
              />
              <label htmlFor='budget_over_100k' className='ml-3'>
                <span className='block text-sm leading-5 text-gray-700'>
                  $100K+
                </span>
              </label>
            </div>
          </div>
        </fieldset>
        <div className='sm:col-span-2'>
          <label
            htmlFor='how_did_you_hear_about_us'
            className='block text-sm font-medium leading-5 text-gray-700'
          >
            How did you hear about us?
          </label>
          <div className='mt-1 relative rounded-md shadow-sm'>
            <input
              id='how_did_you_hear_about_us'
              className='form-input block w-full transition ease-in-out duration-150 sm:text-sm sm:leading-5'
              onChange={this.handleChange}
              name="how_did_you_hear_about_us"
            />
          </div>
        </div>

        <div className='field'>
          <button
            className='w-full flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md primary-btn transition duration-150 ease-in-out'
            type='submit'
          >
            Send
          </button>
        </div>
      </form>
    );
  }
}
