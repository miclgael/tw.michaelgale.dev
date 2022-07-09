<template>
  <main>
    <global-app-header />
    <section class="min-h-max">
      <div class="inside">
        <slot />
      </div>
    </section>
    <global-app-footer />
  </main>
</template>

<script>
export default {
  name: 'DefaultLayout'
}
</script>
