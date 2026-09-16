<script setup>
import { computed, ref } from 'vue'
import PortfolioSidebar from './components/PortfolioSidebar.vue'
import ResumeSection from './components/ResumeSection.vue'
import ExperienceItem from './components/ExperienceItem.vue'
import EducationItem from './components/EducationItem.vue'
import ProjectItem from './components/ProjectItem.vue'
import SkillGroup from './components/SkillGroup.vue'
import { resume } from './data/resume'
import { useActiveSection } from './composables/useActiveSection'

const contentPane = ref(null)

const sections = computed(() => [
  resume.summary && { id: 'summary', label: 'Summary' },
  resume.experience?.length && { id: 'experience', label: 'Experience' },
  resume.education?.length && { id: 'education', label: 'Education' },
  resume.projects?.length && { id: 'projects', label: 'Projects' },
  resume.skills?.length && { id: 'skills', label: 'Skills' },
  resume.certifications?.length && { id: 'certifications', label: 'Certifications' },
  resume.awards?.length && { id: 'awards', label: 'Awards' },
  resume.interests?.length && { id: 'interests', label: 'Interests' },
].filter(Boolean))

const { activeSection, selectSection } = useActiveSection(sections, contentPane)

function navigateToSection(id) {
  selectSection(id)
  const target = document.getElementById(id)
  if (!target) return

  const isDesktop = window.matchMedia('(min-width: 801px)').matches
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const behavior = reducedMotion ? 'auto' : 'smooth'

  if (isDesktop && contentPane.value) {
    const paneTop = contentPane.value.getBoundingClientRect().top
    const targetTop = target.getBoundingClientRect().top
    contentPane.value.scrollTo({
      top: contentPane.value.scrollTop + targetTop - paneTop - 32,
      behavior,
    })
    return
  }

  target.scrollIntoView({ behavior, block: 'start' })
}
</script>

<template>
  <main class="portfolio-shell">
    <div ref="contentPane" class="resume-pane" tabindex="-1">
      <div class="resume-content">
        <ResumeSection id="summary" number="01" title="Summary">
          <p class="summary-copy">{{ resume.summary }}</p>
          <dl class="working-note" v-if="resume.currentlyWorkingOn">
            <dt>Currently</dt>
            <dd>{{ resume.currentlyWorkingOn }}</dd>
          </dl>
        </ResumeSection>

        <ResumeSection id="experience" number="02" title="Experience">
          <div class="entry-list">
            <ExperienceItem v-for="role in resume.experience" :key="`${role.company}-${role.title}`" :role="role" />
          </div>
        </ResumeSection>

        <ResumeSection id="education" number="03" title="Education">
          <div class="entry-list">
            <EducationItem v-for="item in resume.education" :key="item.institution" :education="item" />
          </div>
        </ResumeSection>

        <ResumeSection id="projects" number="04" title="Projects">
          <div class="entry-list">
            <ProjectItem v-for="project in resume.projects" :key="project.name" :project="project" />
          </div>
        </ResumeSection>

        <ResumeSection id="skills" number="05" title="Skills">
          <div class="skill-grid">
            <SkillGroup v-for="group in resume.skills" :key="group.category" :group="group" />
          </div>
        </ResumeSection>

        <ResumeSection id="certifications" number="06" title="Certifications">
          <ul class="compact-list">
            <li v-for="item in resume.certifications" :key="item.name">
              <div><strong>{{ item.name }}</strong><span>{{ item.issuer }}</span></div>
              <span>{{ item.year }}</span>
            </li>
          </ul>
        </ResumeSection>

        <ResumeSection id="awards" number="07" title="Awards / Achievements">
          <ul class="compact-list">
            <li v-for="item in resume.awards" :key="item.title">
              <div><strong>{{ item.title }}</strong><span>{{ item.description }}</span></div>
              <span>{{ item.year }}</span>
            </li>
          </ul>
        </ResumeSection>

        <ResumeSection id="interests" number="08" title="Interests">
          <ul class="interest-list" aria-label="Interests">
            <li v-for="interest in resume.interests" :key="interest">{{ interest }}</li>
          </ul>
          <p class="site-note">Designed and built with Vue. Content lives in one data file.</p>
        </ResumeSection>
      </div>
    </div>

    <PortfolioSidebar
      :person="resume.personal"
      :sections="sections"
      :active-section="activeSection"
      @navigate="navigateToSection"
    />
  </main>
</template>
