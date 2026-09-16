<script setup>
defineProps({
  id: { type: String, required: true },
  title: { type: String, required: true },
})
</script>

<template>
  <section :id="id" class="resume-section" :aria-labelledby="`${id}-title`">
    <h2 :id="`${id}-title`" class="visually-hidden">{{ title }}</h2>
    <div class="section-body"><slot /></div>
  </section>
</template>
