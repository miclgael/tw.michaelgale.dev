<template>
  <header>
    <div class="inside">
      <div class="flex gap-12">
        <global-app-branding />
        <global-app-navigation />
      </div>
    </div>
  </header>
</template>

<style lang="postcss" scoped>
header {
@apply
  py-4
  bg-white/90
  border-b
  border-solid
  border-b-gray-500/10
  backdrop-blur-md
  sticky
  top-0
  z-50;
}
</style>
