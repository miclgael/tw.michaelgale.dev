<script>
import IconInfo from '~icons/icomoon-free/info'

export default {
  components: {
    IconInfo
  },
  setup () {
    const links = useNavigation()
    const content = useContent()
    const global = useGlobalStore()
    return { links, content, global }
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
        <div class="footer-blurb">
          <!-- eslint-disable vue/no-v-html -->
          <div v-html="content.footer" />
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
        </div>
      </div>
      <div>
        <global-link-list
          :list="links.footer.social"
          :inline="true"
        />
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

:deep(p) {
  @apply m-y-5 first:m-t-0;
}
.icon {
  @apply w-6 h-6;
}
.icon--inline {
  @apply inline-block m-r-4;
}
</style>
