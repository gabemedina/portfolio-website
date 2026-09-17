<script setup>
defineProps({ role: { type: Object, required: true } });
</script>

<template>
    <article class="resume-entry experience-entry">
        <div class="entry-aside">
            <p>{{ role.startDate }} — {{ role.endDate }}</p>
        </div>
        <div class="entry-main">
            <h3>
                {{ role.title }} <span>· {{ role.company }}</span>
            </h3>
            <p class="entry-location">{{ role.location }}</p>
            <p class="entry-description">{{ role.description }}</p>
            <ul class="achievement-list">
                <li v-for="item in role.accomplishments" :key="item">
                    {{ item }}
                </li>
            </ul>
            <ul
                class="tag-list"
                :aria-label="`Technologies used at ${role.company}`">
                <li v-for="technology in role.technologies" :key="technology">
                    {{ technology }}
                </li>
            </ul>
        </div>
    </article>
</template>
