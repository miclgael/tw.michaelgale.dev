<template>
  <header>
    <div class="inside">
      <div class="flex gap12">
        <global-app-branding />
        <global-app-navigation />
      </div>
    </div>
  </header>
</template>

<style lang="postcss" scoped>
header {
  padding: 1em 0;
  transition: .3s ease;
  background-color: rgba(252,250,250,.89);
  border-bottom: 1px solid rgba(238,231,231,.302);
  -webkit-backdrop-filter: blur(2px);
  backdrop-filter: blur(2px);
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 100;
}
</style>
