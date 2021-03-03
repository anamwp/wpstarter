/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
        allWpPost {
            nodes {
                slug
                id
            }
        }
        allWpCategory {
            nodes {
                name
                slug
                id
                count
            }
        }
    }
  `).then(result => {
    //highlight-start
    result.data.allWpPost.nodes.forEach(node => {
      createPage({
        path: node.slug,
        component: path.resolve(`./src/components/Post.js`),
        context: {
          id: node.id,
        },
      })
    });
    result.data.allWpCategory.nodes.forEach(node => {
        createPage({
            path: `/category/${node.slug}`,
            component: path.resolve(`./src/components/Category.js`),
            context: {
                id: node.id,
            },
        })
    });
    //highlight-end
  })
}