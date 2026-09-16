<script setup>
defineProps({ group: { type: Object, required: true } })
</script>

<template><div class="skill-group"><h3>{{ group.category }}</h3><p>{{ group.items.join(' · ') }}</p></div></template>
