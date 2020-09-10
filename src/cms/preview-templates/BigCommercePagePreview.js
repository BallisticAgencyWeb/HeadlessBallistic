import React from 'react'
import PropTypes from 'prop-types'
import { BigCommercePageTemplate } from '../../templates/bigcommerce-page'

const BigCommercePagePreview = ({ entry, widgetFor }) => (
  <BigCommercePageTemplate
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
