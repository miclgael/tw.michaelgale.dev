<script lang="ts" setup>
withDefaults(defineProps<{ zIndex?: number }>(), {
  zIndex: 3
})
</script>

<template>
  <div class="logo">
    <span aria-hidden="true" data-brace="{" />
    <nuxt-link to="/" class="inline-flex text-white no-underline">
      <span>Michael</span>
      <span>Gale</span>
    </nuxt-link>
    <span aria-hidden="true" data-brace="}" />
  </div>
</template>

<style lang="postcss" scoped>
.logo {
  z-index: v-bind(zIndex);
  @apply:
    bg-black/90
    inline-flex
    text-2xl
    italic
    whitespace-no-wrap
    text-white
    relative
    plex-mono
    before:-z-1
    before:absolute
    before:content-none
    before:top-0
    before:right-0
    before:bottom-0
    before:left-0
    before:opacity-0
    before:transition-opacity
    before:duration-300
    before:gradient-fill
    hover:before:opacity-100
    hover:[text-shadow:1px_1px_1px_#4d4d4d];
}

/* Responsive logo */
.logo a > span {
  @apply
    w-4
    overflow-hidden
    xs:w-auto
    xs:overflow-auto;
}

/* Render the "{" and "}", but not as text-nodes */
[data-brace]:before {
  content: attr(data-brace);
}
</style>
