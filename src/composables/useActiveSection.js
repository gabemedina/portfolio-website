import { onBeforeUnmount, onMounted, ref, watch } from 'vue'

export function useActiveSection(sections, scrollContainer) {
  const activeSection = ref(sections.value[0]?.id ?? '')
  let observer
  let mediaQuery

  const connectObserver = () => {
    observer?.disconnect()
    const elements = sections.value.map(({ id }) => document.getElementById(id)).filter(Boolean)
    const root = mediaQuery.matches ? scrollContainer.value : null

    observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) activeSection.value = visible[0].target.id
      },
      { root, rootMargin: '-12% 0px -64% 0px', threshold: 0 },
    )

    elements.forEach((element) => observer.observe(element))
  }

  const selectSection = (id) => { activeSection.value = id }

  onMounted(() => {
    mediaQuery = window.matchMedia('(min-width: 801px)')
    connectObserver()
    mediaQuery.addEventListener('change', connectObserver)
  })

  watch(sections, connectObserver)
  onBeforeUnmount(() => {
    observer?.disconnect()
    mediaQuery?.removeEventListener('change', connectObserver)
  })

  return { activeSection, selectSection }
}
