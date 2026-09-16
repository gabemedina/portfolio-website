<script setup>
defineProps({
  sections: { type: Array, required: true },
  activeSection: { type: String, required: true },
})
defineEmits(['navigate'])
</script>

<template>
  <nav class="section-nav" aria-label="Resume sections">
    <a
      v-for="(section, index) in sections"
      :key="section.id"
      :href="`#${section.id}`"
      :class="{ active: activeSection === section.id }"
      :aria-current="activeSection === section.id ? 'location' : undefined"
      @click.prevent="$emit('navigate', section.id)"
    >
      <span>{{ String(index + 1).padStart(2, '0') }}</span><strong>{{ section.label }}</strong>
    </a>
  </nav>
</template>
