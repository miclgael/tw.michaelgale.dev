<template>
  <main>
    <global-app-header />
    <section class="min-h-40vh">
      <div class="inside">
        <slot />
      </div>
    </section>
    <global-app-footer />
  </main>
</template>

<script>
import '@/assets/global.postcss'
export default {
  name: 'DefaultLayout'
}
</script>
