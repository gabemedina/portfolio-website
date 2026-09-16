<script setup>
defineProps({
  id: { type: String, required: true },
  number: { type: String, required: true },
  title: { type: String, required: true },
})
</script>

<template>
  <section :id="id" class="resume-section" :aria-labelledby="`${id}-title`">
    <header class="section-heading"><p class="section-number">{{ number }}</p><h2 :id="`${id}-title`">{{ title }}</h2></header>
    <div class="section-body"><slot /></div>
  </section>
</template>
