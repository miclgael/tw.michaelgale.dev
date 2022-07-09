<script>
export default {
  name: 'BlogPage'
}
</script>
<template>
  <div>
    <content-list v-slot="{ list }" path="/blog">
      <div v-for="article in list" :key="article._path">
        <nuxt-link :to="article._path">
          <h2>{{ article.title }}</h2>
          <p>{{ article.description }}</p>
        </nuxt-link>
      </div>

      <!-- <template #not-found>
        <p>No articles found.</p>
      </template> -->
    </content-list>
  </div>
</template>
