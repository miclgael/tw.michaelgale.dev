<template>
  <main>
    <global-app-header />
    <slot />
    <global-app-footer />
    <global-app-icons />
  </main>
</template>

<script>
export default {
  name: 'DefaultLayout'
}
</script>