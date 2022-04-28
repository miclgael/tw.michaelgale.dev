<script lang="ts" setup>
defineProps<{ zIndex?: number }>()
</script>

<template>
  <div class="logo plex-mono">
    <span aria-hidden="true" data-brace="{" />
    <nuxt-link to="/" class="inline-flex text-white no-underline">
      <span>Michael</span>
      <span>Gale</span>
    </nuxt-link>
    <span aria-hidden="true" data-brace="}" />
  </div>
</template>

<style>
.logo {
  /* https://vuejs.org/api/sfc-css-features.html#v-bind-in-css */
  z-index: v-bind(zIndex);
}
</style>
