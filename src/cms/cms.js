import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import BigCommercePagePreview from './preview-templates/BigCommercePagePreview'
import SecondaryPostPreview from './preview-templates/SecondaryPostPreview'
import ServicePostPreview from './preview-templates/ServicePostPreview'

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
CMS.registerPreviewTemplate('bigcommerce', BigCommercePagePreview)
CMS.registerPreviewTemplate('secondary-pages', SecondaryPostPreview)
CMS.registerPreviewTemplate('services', ServicePostPreview)
