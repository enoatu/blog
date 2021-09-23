import PropTypes from 'prop-types'
import { siteTitle, defaultDescription, fbAppId } from '@/config'
import Helmet from 'react-helmet'

const Head = ({ faviconUrl, ogImageUrl, ...props }) => {
  const title = props.pageTitle
    ? `${props.pageTitle} | ${siteTitle}`
    : `${siteTitle}`
  const description = props.description ? props.description : defaultDescription
  return (
    <Helmet>
      <title>{title}</title>

      <link
        rel="shortcut icon"
        type="image/vnd.microsoft.icon"
        href={faviconUrl}
      />
      <link rel="icon" type="image/vnd.microsoft.icon" href={faviconUrl} />
      <link rel="apple-touch-icon" href={faviconUrl} />

      <meta
        name="keywords"
        content="enoatu,enotiru,program,7daystodie,7dtd,7d2d,revenhearst,zombie"
      />
      <meta name="description" content={description} />
      <meta name="author" content="enoatu" />
      <meta name="og:type" content="website" />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:site_name" content={siteTitle} />
      {/*<meta name="og:url" content={}/>*/}
      <meta name="og:image" content={ogImageUrl} />
      <meta name="og:locale" content="ja_JP" />
      <meta name="fb:app_id" content={fbAppId} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {/*<meta name="twitter:url" content="https://moove.co.jp/"/>*/}
      <meta name="twitter:image" content={ogImageUrl} />
      {/*<meta name="twitter:site" content="@enot"/>*/}
    </Helmet>
  )
}

Head.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  ogImageUrl: PropTypes.string.isRequired,
  faviconUrl: PropTypes.string.isRequired,
}

export default Head
