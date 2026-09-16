<script setup>
import SectionNavigation from './SectionNavigation.vue'

defineProps({
  person: { type: Object, required: true },
  sections: { type: Array, required: true },
  activeSection: { type: String, required: true },
})
defineEmits(['navigate'])
</script>

<template>
  <aside class="sidebar" aria-label="Profile and resume navigation">
    <div class="identity-block">
      <p class="eyebrow">Portfolio / Résumé</p>
      <h1>{{ person.name }}</h1>
      <p class="role">{{ person.title }}</p>
      <p class="intro">{{ person.introduction }}</p>
      <dl class="personal-details">
        <div><dt>Based in</dt><dd>{{ person.location }}</dd></div>
        <div><dt>Contact</dt><dd><a :href="`mailto:${person.email}`">{{ person.email }}</a></dd></div>
      </dl>
      <div class="profile-links" aria-label="Profile links">
        <a v-for="link in person.links" :key="link.label" :href="link.url" target="_blank" rel="noreferrer">
          {{ link.label }}<span aria-hidden="true">↗</span>
        </a>
        <a :href="person.resumeUrl" download>Download CV<span aria-hidden="true">↓</span></a>
      </div>
    </div>
    <SectionNavigation :sections="sections" :active-section="activeSection" @navigate="$emit('navigate', $event)" />
  </aside>
</template>
