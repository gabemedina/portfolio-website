<script setup>
defineProps({ education: { type: Object, required: true } })
</script>

<template>
  <article class="resume-entry">
    <div class="entry-aside"><p>{{ education.startDate }} — {{ education.endDate }}</p></div>
    <div class="entry-main"><h3>{{ education.degree }} · {{ education.field }}</h3><p class="entry-organization">{{ education.institution }}</p><p class="entry-description">{{ education.details }}</p></div>
  </article>
</template>
