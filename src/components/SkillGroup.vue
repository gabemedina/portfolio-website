<script setup>
defineProps({ group: { type: Object, required: true } });
</script>

<template>
    <div class="skill-group">
        <h3>{{ group.category }}</h3>
        <ul class="skill-pills">
            <li v-for="item in group.items" :key="item">{{ item }}</li>
        </ul>
    </div>
</template>
