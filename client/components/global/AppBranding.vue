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

<style scoped>
.logo {
  z-index: v-bind(zIndex);
}
.logo:hover {
  text-shadow: 1px 1px 1px #4d4d4d;
}
.logo:before {
  content: '';
  z-index: -1;
  transition: opacity 0.3s;
}
/* Visually reads as: "{MG}" */
.logo a > span {
  width: 16px;
  overflow: hidden;
}
/* Visually reads as: "{MichaelGale}" */
@media screen and (min-width: 465px) {
  .logo a > span {
    width: auto;
    overflow: unset;
  }
}

/* Render the "{" and "}", but not as text-nodes */
[data-brace]:before {
  content: attr(data-brace);
}
</style>
