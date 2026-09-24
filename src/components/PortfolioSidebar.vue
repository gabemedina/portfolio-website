<script setup>
import SectionNavigation from './SectionNavigation.vue';

defineProps({
    person: { type: Object, required: true },
    sections: { type: Array, required: true },
    activeSection: { type: String, required: true },
});
defineEmits(['navigate']);
</script>

<template>
    <aside class="sidebar" aria-label="Profile and resume navigation">
        <div class="sidebar-main">
            <div class="identity-block">
                <p class="eyebrow">Resume / Portfolio</p>
                <h1>{{ person.name }}</h1>
                <p class="role">{{ person.title }}</p>
                <p class="intro">{{ person.introduction }}</p>
                <dl class="personal-details">
                    <div>
                        <dt>Based in</dt>
                        <dd>{{ person.location }}</dd>
                    </div>
                    <div>
                        <dt>Contact</dt>
                        <dd>
                            <a :href="`mailto:${person.email}`">{{
                                person.email
                            }}</a>
                        </dd>
                    </div>
                </dl>
                <div class="social-links" aria-label="Social profiles">
                    <a
                        v-for="link in person.links"
                        :key="link.label"
                        :href="link.url"
                        :aria-label="`Visit ${link.label} profile`"
                        target="_blank"
                        rel="noreferrer">
                        <svg
                            v-if="link.label === 'GitHub'"
                            viewBox="0 0 24 24"
                            aria-hidden="true">
                            <path
                                d="M12 .7a11.5 11.5 0 0 0-3.64 22.4c.58.11.79-.25.79-.56v-2.23c-3.24.7-3.92-1.37-3.92-1.37-.53-1.35-1.3-1.71-1.3-1.71-1.06-.73.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.73 1.27 3.4.97.1-.76.41-1.27.74-1.56-2.59-.29-5.31-1.29-5.31-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.48.11-3.05 0 0 .97-.31 3.16 1.18A11 11 0 0 1 12 6.09c.98 0 1.95.13 2.86.39 2.2-1.49 3.16-1.18 3.16-1.18.63 1.57.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.73 5.39-5.32 5.68.42.36.79 1.07.79 2.16v3.25c0 .31.21.68.8.56A11.5 11.5 0 0 0 12 .7Z" />
                        </svg>
                        <svg
                            v-else-if="link.label === 'LinkedIn'"
                            viewBox="0 0 24 24"
                            aria-hidden="true">
                            <path
                                d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.98h3.42v1.57h.05c.48-.9 1.64-1.85 3.37-1.85 3.61 0 4.27 2.37 4.27 5.46v6.29ZM5.32 7.41a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.1 20.45H3.54V8.98H7.1v11.47Z" />
                        </svg>
                        <span class="visually-hidden">{{ link.label }}</span>
                    </a>
                </div>
            </div>
            <SectionNavigation
                :sections="sections"
                :active-section="activeSection"
                @navigate="$emit('navigate', $event)" />
        </div>

    </aside>
</template>
