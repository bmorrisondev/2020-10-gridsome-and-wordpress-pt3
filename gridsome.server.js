module.exports = function (api) {
  api.createPages(async ({ graphql, createPage }) => {
    // Setup our query to get the WordPress data
    const query = `{
      posts {
        edges {
          node {
            title
            slug
            content
          }
        }
      }
    }`
  
    // Execute the query
    const queryResult = await graphql(query)
  
    // Pull the data from the query into a variable thats easier to work with
    let posts = queryResult.data.posts.edges.map(edge => edge.node)

    console.log('posts', JSON.stringify(posts))
  
    // For each post, generate a page using the context & template we created
    posts.forEach(p => {
      createPage({
        path: `/blog/${p.slug}`,
        component: './src/templates/Post.vue',
        context: {
          title: p.title,
          content: p.content
        }
      })
    })
  })
}
