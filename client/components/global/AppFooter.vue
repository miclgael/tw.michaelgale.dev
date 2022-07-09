<script>
import IconInfo from '~icons/icomoon-free/info'

export default {
  components: {
    IconInfo
  },
  setup () {
    const links = useNavigation()
    const global = useGlobalStore()
    return { links, global }
  }
}
</script>
<template>
  <footer class="bg-black text-white py-12">
    <div class="inside my-5">
      <global-app-branding :z-index="0" />
    </div>
    <div class="inside">
      <div class="footer-grid">
        <div class="footer-blurb">
          <p>An award-winning full-stack web developer focused on making things fast, resilient and inclusive.</p>
          <p>I'm a computer-science hobbyist, part-time musician and proud co-parent to two adorable kittens <span class="text-sm">(Mow-mow and Little Moose 💕)</span>.</p>
          <p>
            If you want to work together - cool! Unfortunately, I'm all booked out
            for Q{{ global.yearQuarter.now }}, but I am accepting
            <nuxt-link to="/contact">
              <span>expressions of interest</span>
            </nuxt-link> for Q{{ global.yearQuarter.next }}
          </p>
        </div>
        <div
          class="footer-subgrid"
        >
          <div class="w-100%">
            <global-link-list
              heading="Highlights"
              :list="links.footer.highlights"
            />
          </div>
          <div>
            <global-link-list
              heading="About me"
              :list="links.footer.about"
            />
          </div>
          <div>
            <global-link-list
              heading="Socials"
              :list="links.footer.social"
              :inline="true"
            />
          </div>
        </div>
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
    lg:grid-cols-[2fr_2fr]
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
    lg:grid-cols-3
  ;
}

:deep(p) {
  @apply my-5 first:mt-0;
}

</style>
