<template>
  <footer class="bg-black text-white py-12">
    <!--   -->
    <div class="footer-grid">
      <div>
        <global-app-branding :z-index="0" />
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
          <!-- to="/contact" -->
          <nuxt-link>
            expressions of interest
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
            <li role="listitem">
              <!-- to="/blog/moving-interstate"  -->
              <nuxt-link
                text-white
              >
                Moving Interstate
              </nuxt-link>
            </li>
            <li role="listitem">
              <!-- to="/blog/how-i-got-here"  -->
              <nuxt-link
                text-white
              >
                How I Got Here
              </nuxt-link>
            </li>
            <li role="listitem">
              <!-- to="/blog/back-to-school"  -->
              <nuxt-link
                text-white
              >
                Back to School
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="uppercase">
            About me
          </h3>
          <ul role="list" class="p0 list-none">
            <!-- <li role="listitem">
              <nuxt-link
              to="/about">About</
              nuxt-link>
            </li> -->
            <li role="listitem">
              <!-- to="/contact" -->
              <nuxt-link
                text-white
              >
                Contact
              </nuxt-link>
            </li>
            <li role="listitem">
              <!-- to="/uses" -->
              <nuxt-link
                text-white
              >
                Uses
              </nuxt-link>
            </li>
            <!-- <li role="listitem">
              <nuxt-link
              to="/privacy">Privacy</
              nuxt-link>
            </li> -->
          </ul>
        </div>
      </div>
    </div>
    <div>
      <ul class="inline-list" role="list">
        <li role="listitem">
          <a href="https://codepen.io/miclgael">
            <icon-codepen class="icon" />
          </a>
        </li>
        <li role="listitem">
          <a href="https://linkedin.com/in/miclgael">
            <icon-linkedin class="icon" />
          </a>
        </li>
        <li role="listitem">
          <a href="https://twitter.com/miclgael">
            <icon-twitter class="icon" />
          </a>
        </li>
      </ul>
    </div>

    <p>Michael has been deving for ______ years!</p>
  </footer>
</template>

<script>
import IconTwitter from '~icons/icomoon-free/twitter'
import IconCodepen from '~icons/icomoon-free/codepen'
import IconLinkedin from '~icons/icomoon-free/linkedin'
export default {
  components: {
    IconTwitter,
    IconCodepen,
    IconLinkedin
  },
  // computed: {
  //   ...mapState(['globalDeveloperYears'])
  // },
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
    gap-12
    xs:grid-cols-2
    sm:grid-cols-1
    md:grid-cols-2
    md:col-start-2
    md:col-end-4
  ;
}
.footer-subgrid ul li {
  @apply m-y-5 first:m-t-10;
}

.inline-list {
  @apply
    flex
    flex-row
    gap-12
    p0
    list-none
}
/* .inline-list li {
  @apply m0;
} */
p {
  @apply my-8;
}
.icon {
  @apply w-6 h-6;
}
</style>
