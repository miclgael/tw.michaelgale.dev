
export default function () {
  const nuxtApp = useNuxtApp()
  return useState('content', () => ({
    footer: nuxtApp.$md().render(
`
An award-winning full-stack web developer focused on making things fast, resilient and inclusive.

I'm a computer-science hobbyist, part-time musician and proud co-parent to two adorable kittens <span class="text-sm">(Mow-mow and Little Moose 💕)</span>.
`
    )
  }))
}
