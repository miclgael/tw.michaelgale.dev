<script lang="ts" setup>
const links:any = useNavigation()
</script>

<template>
  <nav class="flex items-center w-full">
    <ul role="list" class="inline-list justify-start w-full">
      <li
        v-for="(link, index) in links.main"
        :key="`link--${index}`"
        role="listitem"
        :class="{
          'hidden md:block': !(!!link.cta),
          'list-item--cta': !!link.cta
        }"
      >
        <nuxt-link :to="link.url" :class="{'link--cta': !!link.cta}">
          {{ link.label }}
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="postcss">
.list-item--cta {
  margin-left: auto;
}
.link--cta {
  white-space: nowrap;
  font-size: 1.125rem;
  color: #4a5fe2;
  background-color: #fcfafa;
  letter-spacing: 0;
  border: 3px solid #4a5fe2;
  text-decoration: none;
  padding: .5rem 2rem;
  z-index: 3;
  height: 3rem;
  text-decoration: none;
}
.link--cta:hover {
  background-color: #4a5fe2;
  border: 3px solid #344cde;
  color: #fff;
}
</style>
