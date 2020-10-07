import React from 'react'
import PropTypes from 'prop-types'
import { ServicesPostTemplate } from '../../templates/service-post'


const ServicePostPreview = ({ entry, widgetFor }) => (
  <ServicesPostTemplate
    description={entry.getIn(['data', 'description'])}
    featuredimage={entry.getIn(['data', 'featuredimage'])}
    wistiaid={entry.getIn(['data', 'wistiaid'])}
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

ServicePostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ServicePostPreview
