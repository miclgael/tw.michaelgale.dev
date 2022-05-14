<script lang="ts" setup>
const links:any = useNavigation()
</script>

<template>
  <nav>
    <ul role="list">
      <li v-for="(link, index) in links.main" :key="`link--${index}`" role="listitem">
        <nuxt-link :to="link.url">
          {{ link.label }}
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>
