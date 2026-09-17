import { ref } from 'vue';

export function useActiveSection(sections) {
    const activeSection = ref(sections.value[0]?.id ?? '');

    const selectSection = (id) => {
        activeSection.value = id;
    };

    return { activeSection, selectSection };
}
