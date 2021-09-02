import { graphql, useStaticQuery } from 'gatsby'
import get from 'lodash/get'
import PropTypes from 'prop-types'

export default function HTML(props) {
  const data = useStaticQuery(graphql`
    query {
      allContentfulAsset(limit: 10, filter: { title: { eq: "blog-favicon" } }) {
        nodes {
          file {
            url
          }
        }
      }
    }
  `)
  const faivonUrl = get(data, 'allContentfulAsset.nodes[0].file.url')
  return (
    <html {...props.htmlAttributes}>
      <head>
        <link rel="icon" type="image/vnd.microsoft.icon" href={faivonUrl} />
        <link
          rel="shortcut icon"
          type="image/vnd.microsoft.icon"
          href={faivonUrl}
        />
        <link rel="apple-touch-icon" href={faivonUrl} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            <!-- Google Tag Manager -->
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-P46GWR4');
            <!-- End Google Tag Manager -->*
          `,
          }}
        />
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
              <!-- Google Tag Manager (noscript) -->
              <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P46GWR4"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>
              <!-- End Google Tag Manager (noscript) -->
            `,
          }}
        />
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
