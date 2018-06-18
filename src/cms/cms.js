// Your module must at least include these three imports
import CMS from "netlify-cms";
import "netlify-cms/dist/cms.css";

import BlogPostPreview from './preview-templates/BlogPostPreview'

// Register the imported widget:
CMS.registerWidget("blog", BlogPostPreview);