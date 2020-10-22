<template>
  <Layout>
    <h1 v-html="$context.title"></h1>
    <div v-html="$context.content"></div>
  </Layout>
</template>

<script>
export default {
  metaInfo: function () {
    return {
      title: this.$context.title
    }
  }
}
</script>