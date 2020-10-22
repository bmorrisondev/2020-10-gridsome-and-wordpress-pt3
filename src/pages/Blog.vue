<template>
  <Layout>
    <h1>Posts</h1>
    <ul>
      <li v-for="{ node } in $static.posts.edges" :key="node.id">
        <router-link :to="`/blog/${node.slug}`">{{ node.title }}</router-link>
      </li>
    </ul>
  </Layout>
</template>

<static-query>
{
  posts {
    edges {
      node {
        id
        title
        content
        slug
      }
    }
  }
}
</static-query>

<script>
export default {
  metaInfo: {
    title: 'Blog'
  }
}
</script>
