<script lang="ts">
// Todo: avoid this pattern :(
import IconTwitter from '~icons/icomoon-free/twitter'
import IconCodepen from '~icons/icomoon-free/codepen'
import IconLinkedin from '~icons/icomoon-free/linkedin'
export default {
  components: {
    IconTwitter,
    IconCodepen,
    IconLinkedin
  }
}
</script>
<script lang="ts" setup>

const props = withDefaults(defineProps<{
  heading?:string,
  list: any,
  inline?: boolean,
}>(), {
  heading: null,
  inline: false
})
const ulClass = props.inline ? 'inline-list' : 'p-0 list-none'
</script>

<template>
  <div>
    <h3 v-if="heading" class="uppercase">
      {{ heading }}
    </h3>
    <ul role="list" :class="ulClass">
      <li v-for="(link, index) in list" :key="`footer-link--${index}`" role="listitem">
        <nuxt-link :class="{'text-white': !!link.icon}" :to="link.url">
          <component :is="link.icon" v-if="!!link.icon" />
          <span :class="{'sr-only': !!link.icon }">{{ link.label }}</span>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<style lang="postcss" scoped>
ul li {
  @apply m-y-5;
}
.inline-list {
  @apply
    flex
    flex-row
    gap-12
    p0
    list-none;
}
</style>
