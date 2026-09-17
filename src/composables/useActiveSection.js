import { onBeforeUnmount, onMounted, ref, watch } from 'vue'

export function useActiveSection(sections) {
  const activeSection = ref(sections.value[0]?.id ?? '')
  let observer

  const connectObserver = () => {
    observer?.disconnect()
    const elements = sections.value.map(({ id }) => document.getElementById(id)).filter(Boolean)
    observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) activeSection.value = visible[0].target.id
      },
      { root: null, rootMargin: '-12% 0px -64% 0px', threshold: 0 },
    )

    elements.forEach((element) => observer.observe(element))
  }

  const selectSection = (id) => { activeSection.value = id }

  onMounted(() => {
    connectObserver()
  })

  watch(sections, connectObserver)
  onBeforeUnmount(() => {
    observer?.disconnect()
  })

  return { activeSection, selectSection }
}
