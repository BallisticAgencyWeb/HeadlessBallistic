import React from "react";
import { Helmet } from "react-helmet";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Notify from "./bigcommerce/Notify";
import "./all.sass";
import "./Layout.css";
import useSiteMetadata from "./SiteMetadata";

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="/img/og-image.jpg" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <script>{`function createFcn(nm){(window.freshsales)[nm]=function(){(window.freshsales).push([nm].concat(Array.prototype.slice.call(arguments,0)))}; } (function(url,appToken,formCapture){window.freshsales=window.freshsales||[];if(window.freshsales.length==0){list='init identify trackPageView trackEvent set'.split(' ');for(var i=0;i<list.length;i++){var nm=list[i];createFcn(nm);}var t=document.createElement('script');t.async=1;t.src='https://assets.freshsales.io/assets/analytics.js';var ft=document.getElementsByTagName('script')[0];ft.parentNode.insertBefore(t,ft);freshsales.init('https://ballisticagency.freshsales.io','3153ee4b05ac647a2623635672a510009c39c47fdccc3ad7c6cf733f4d8b5576',true);}})();`}</script>
        <link
          href="https://cdn11.bigcommerce.com/s-b7clv5baib/product_images/Ballistic%20favecon-04.png?t=1587064014"
          rel="shortcut icon"
        ></link>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-142758470-1"
        ></script>
        <script>{`
          <!-- Global site tag (gtag.js) - Google Analytics -->
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-142758470-1');
        `}</script>
        <script type="text/javascript">{`
          window.omnisend = window.omnisend || [];
          omnisend.push(["accountID", "5f5797e999f0b70fa4baa156"]);
          omnisend.push(["track", "$pageViewed"]);
          !function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://omnisrc.com/inshop/launcher-v2.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}();
        `}</script>
      </Helmet>
      <Notify />
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default TemplateWrapper;
