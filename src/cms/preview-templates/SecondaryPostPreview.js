import React from 'react'
import PropTypes from 'prop-types'
import { SecondaryPostTemplate } from '../../templates/secondary-post'

const SecondaryPostPreview = ({ entry, widgetFor }) => (
  <SecondaryPostTemplate
    content={widgetFor('body')}
    title={entry.getIn(['data', 'title'])}
  />
)

SecondaryPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default SecondaryPostPreview
