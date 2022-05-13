<script>
import IconTwitter from '~icons/icomoon-free/twitter'
import IconCodepen from '~icons/icomoon-free/codepen'
import IconLinkedin from '~icons/icomoon-free/linkedin'
import IconInfo from '~icons/icomoon-free/info'

export default {
  components: {
    IconTwitter,
    IconCodepen,
    IconLinkedin,
    IconInfo
  },
  setup () {
    const links = useNavigation()
    const global = useGlobalStore()
    return { links, global }
  },
  methods: {
    getYearQuarter () {
      const date = new Date()
      const month = date.getMonth() + 1
      const now = Math.ceil(month / 3)
      return {
        now,
        next: now + 1 >= 4 ? 1 : now + 1
      }
    }
  }
}
</script>
<template>
  <footer class="bg-black text-white py-12">
    <div class="inside m-y-5">
      <global-app-branding :z-index="0" />
    </div>
    <div class="inside">
      <div class="footer-grid">
        <div>
          <p>
            An award-winning full-stack web developer focused on making things
            fast, resilient and inclusive.
          </p>
          <p>
            I'm a computer-science hobbyist, part-time musician and proud
            co-parent to two adorable kittens
            <span class="text-sm">(Mow-mow and Little Moose 💕).</span>
          </p>

          <p>
            If you want to work together - cool! Unfortunately, I'm all booked out
            for Q{{ getYearQuarter().now }}, but I am accepting
            <nuxt-link to="/contact">
              <span>expressions of interest</span>
            </nuxt-link> for Q{{
              getYearQuarter().next
            }}
          </p>
        </div>
        <div
          class="footer-subgrid"
        >
          <div class="w-100%">
            <h3 class="uppercase">
              Highlights
            </h3>
            <ul role="list" class="p-0 list-none">
              <li v-for="(link, index) in links.footer.highlights" :key="`footer-link--${index}`" role="listitem">
                <nuxt-link
                  text-white
                  :to="link.url"
                >
                  {{ link.label }}
                </nuxt-link>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="uppercase">
              About me
            </h3>
            <ul role="list" class="p0 list-none">
              <li v-for="(link, index) in links.footer.about" :key="`footer-link--${index}`" role="listitem">
                <nuxt-link
                  text-white
                  :to="link.url"
                >
                  {{ link.label }}
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <ul class="inline-list" role="list">
          <li v-for="(link, index) in links.footer.social" :key="`social-link--${index}`" role="listitem">
            <nuxt-link :to="link.url">
              <component :is="link.icon" />
              <span class="sr-only">{{ link.label }}</span>
            </nuxt-link>
          </li>
        </ul>
      </div>

      <p class="flex justify-center opacity90">
        <icon-info class="icon icon--inline" />It's been {{ global.years }} years since I wrote my first lines of HTML!
      </p>
    </div>
  </footer>
</template>

<style lang="postcss" scoped>

.footer-grid {
  @apply
    grid
    sm:grid-cols-2
    sm:gap-12
    md:grid-cols-[3fr_1fr_1fr]
  ;
}

.footer-subgrid {
  @apply
    grid
    xs:gap-0
    sm:gap-12
    xs:grid-cols-2
    sm:grid-cols-1
    md:grid-cols-2
    md:col-start-2
    md:col-end-4
  ;
}
.footer-subgrid ul li {
  @apply m-y-5;
}

.inline-list {
  @apply
    flex
    flex-row
    gap-12
    p0
    list-none
}
p {
  @apply
    m-y-5
    first:m-t-0;
  ;
}
.icon {
  @apply w-6 h-6;
}
.icon--inline {
  @apply inline-block m-r-4;
}
</style>
