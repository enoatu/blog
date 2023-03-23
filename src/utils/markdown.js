export const setImg = (markdownHTML) => {
  const regexp = new RegExp('<p>imghttps://(.*)</p>', 'g')
  const html = markdownHTML?.replaceAll(
    regexp,
    '<img loading="lazy" src="https://$1?raw=true" >'
  )
  return html

  // .match(/(.*\.png)/g).map(v => 'imghttps://github.com/enoatu/blog-hosting/blob/main/2022-10/hood/' + v).join("\n")
}
