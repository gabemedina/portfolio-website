<script setup>
defineProps({ project: { type: Object, required: true } })
</script>

<template>
  <article class="resume-entry project-entry">
    <div class="entry-aside project-links">
      <a :href="project.githubUrl" target="_blank" rel="noreferrer">Source <span aria-hidden="true">↗</span></a>
      <a v-if="project.liveUrl" :href="project.liveUrl" target="_blank" rel="noreferrer">Live <span aria-hidden="true">↗</span></a>
    </div>
    <div class="entry-main">
      <h3>{{ project.name }}</h3><p class="entry-description">{{ project.description }}</p>
      <ul v-if="project.highlights?.length" class="achievement-list"><li v-for="highlight in project.highlights" :key="highlight">{{ highlight }}</li></ul>
      <ul class="tag-list" :aria-label="`Technologies used for ${project.name}`"><li v-for="technology in project.technologies" :key="technology">{{ technology }}</li></ul>
    </div>
  </article>
</template>
