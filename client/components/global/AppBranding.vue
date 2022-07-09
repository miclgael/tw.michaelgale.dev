<script lang="ts" setup>
withDefaults(defineProps<{ zIndex?: number }>(), {
  zIndex: 3
})
</script>

<template>
  <div class="logo">
    <span aria-hidden="true" data-brace="{" />
    <nuxt-link to="/" class="logo__link inline-flex text-white no-underline">
      <span>Michael</span>
      <span>Gale</span>
    </nuxt-link>
    <span aria-hidden="true" data-brace="}" />
  </div>
</template>

<style lang="postcss" scoped>
.logo {
  z-index: v-bind(zIndex);
  @apply
    plex-mono
    bg-black/90
    inline-flex
    text-2xl
    italic
    whitespace-nowrap
    text-white
    relative;
}

.logo:before {
  z-index: -1;
  @apply
    absolute
    content-['']
    top-0
    right-0
    bottom-0
    left-0
    opacity-0
    transition-opacity
    duration-300
    gradient-fill
  ;
}
.logo:hover:before {
  @apply
    opacity-100
    text-shadow;
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
