<template>
  <main>
    <global-app-header />
    <slot />
    <global-app-footer />
  </main>
</template>

<script>
export default {
  name: 'DefaultLayout'
}
</script>

<style lang="postcss">
html {
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  @apply fira-sans;
}
</style>
