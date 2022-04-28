<script lang="ts" setup>
withDefaults(defineProps<{ zIndex?: number }>(), {
  zIndex: 3
})
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
  z-index: v-bind(zIndex);
  position: relative;
}
</style>
