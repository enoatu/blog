const Promise = require('bluebird')
const path = require('path')

// set blog-post for createPage
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const template = path.resolve('./src/templates/blog-post.js')
    resolve(
      graphql(
        `
          {
            allContentfulBlogPost {
              edges {
                node {
                  title
                  slug
                }
              }
            }
            allContentful7DaysToDie {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
        `
      ).then((result) => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const blogPosts = result.data.allContentfulBlogPost.edges
        blogPosts.forEach((post) => {
          createPage({
            path: `/blog/${post.node.slug}/`,
            component: template,
            context: {
              slug: post.node.slug,
            },
          })
        })
        const _7daystodiePosts = result.data.allContentful7DaysToDie.edges
        _7daystodiePosts.forEach((post) => {
          createPage({
            path: `/7daystodie/${post.node.slug}/`,
            component: template,
            context: {
              slug: post.node.slug,
            },
          })
        })
      })
    )
  })
}
