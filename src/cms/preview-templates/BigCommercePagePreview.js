import React from 'react'
import PropTypes from 'prop-types'
import { AboutPageTemplate } from '../../templates/about-page'

const BigCommercePagePreview = ({ entry, widgetFor }) => (
  <AboutPageTemplate
    mainpitch={entry.getIn(['data', 'mainpitch'])}
    intro={entry.getIn(['data', 'intro'])}
    contact={entry.getIn(['data', 'contact'])}
    content={widgetFor('body')}
  />
)

BigCommercePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default BigCommercePagePreview
