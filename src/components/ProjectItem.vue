<script setup>
const props = defineProps({ project: { type: Object, required: true } });
const monogram = props.project.name
    .split(/\s+/)
    .map((word) => word[0])
    .join('')
    .slice(0, 2);
</script>

<template>
    <article class="resume-entry project-entry">
        <div class="project-preview">
            <img
                v-if="project.image"
                :src="project.image"
                :alt="project.imageAlt || `${project.name} preview`"
                loading="lazy"
                decoding="async" />
            <div v-else class="project-preview-fallback" aria-hidden="true">
                <span>{{ monogram }}</span>
                <small>Featured project</small>
            </div>
        </div>
        <div class="entry-main">
            <h3>
                <a
                    :href="project.liveUrl || project.githubUrl"
                    target="_blank"
                    rel="noreferrer"
                    >{{ project.name }}
                    <!-- <span class="external-arrow" aria-hidden="true">↗</span> -->
                </a>
            </h3>
            <p class="entry-description">{{ project.description }}</p>
            <!-- <ul v-if="project.highlights?.length" class="achievement-list">
                <li v-for="highlight in project.highlights" :key="highlight">
                    {{ highlight }}
                </li>
            </ul> -->
            <ul
                class="tag-list"
                :aria-label="`Technologies used for ${project.name}`">
                <li
                    v-for="technology in project.technologies"
                    :key="technology">
                    {{ technology }}
                </li>
            </ul>
            <div class="project-links">
                <!-- <a :href="project.githubUrl" target="_blank" rel="noreferrer"
                    >Source <span aria-hidden="true">↗</span></a
                > -->
                <a
                    v-if="project.liveUrl"
                    :href="project.liveUrl"
                    target="_blank"
                    rel="noreferrer"
                    >Live <span aria-hidden="true">↗</span></a
                >
            </div>
        </div>
    </article>
</template>
