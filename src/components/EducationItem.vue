<script setup>
defineProps({ education: { type: Object, required: true } });
</script>

<template>
    <article class="resume-entry">
        <div class="entry-aside">
            <p>{{ education.startDate }} — {{ education.endDate }}</p>
        </div>
        <div class="entry-main">
            <h3>
                {{ education.degree }}
                <span>· {{ education.institution }}</span>
            </h3>
            <p class="entry-location">{{ education.field }}</p>
            <p class="entry-description">{{ education.details }}</p>
        </div>
    </article>
</template>
