export const resume = {
    personal: {
        name: 'Gabriel Medina',
        title: 'Software Engineer',
        introduction:
            'I build dependable digital products with an eye for clear systems, thoughtful interfaces, and long-term maintainability.',
        location: 'New Orleans, LA',
        email: 'gabrielmedina1@proton.me',
        resumeUrl: '/Gabriel_Medina_Resume.pdf',
        links: [
            { label: 'GitHub', url: 'https://github.com/yourusername' },
            {
                label: 'LinkedIn',
                url: 'https://www.linkedin.com/in/yourusername',
            },
        ],
    },
    summary:
        'Product-minded engineer with six years of experience designing and shipping web applications. I enjoy turning ambiguous problems into calm, useful software—and leaving the codebase clearer than I found it.',
    currentlyWorkingOn:
        'Developer tooling that shortens the path from an idea to a reliable release.',
    experience: [
        {
            company: 'Northstar Labs',
            title: 'Senior Software Engineer',
            location: 'Chicago, IL · Hybrid',
            startDate: '2022',
            endDate: 'Present',
            description:
                'Lead frontend architecture for a workflow platform used by operations teams across North America.',
            accomplishments: [
                'Reworked the application shell and shared component system, cutting feature delivery time by roughly 30%.',
                'Introduced performance budgets and observability that reduced median page-load time from 2.8s to 1.4s.',
                'Mentor four engineers and partner with design on accessible interaction patterns.',
            ],
            technologies: ['Vue', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS'],
        },
        {
            company: 'Fieldwork Studio',
            title: 'Software Engineer',
            location: 'Remote',
            startDate: '2019',
            endDate: '2022',
            description:
                'Built data-rich web products for early-stage teams in logistics, climate, and financial services.',
            accomplishments: [
                'Shipped three customer-facing products from prototype through production.',
                'Created a reusable testing and deployment baseline adopted across six client projects.',
            ],
            technologies: ['JavaScript', 'Vue', 'Express', 'GraphQL', 'Docker'],
        },
    ],
    education: [
        {
            institution: 'Louisiana State University',
            degree: 'Bachelor of Science',
            field: 'Computer Science',
            startDate: '2019',
            endDate: '2024',
            details:
                'Coursework in computer networks, operating systems, and database management.',
        },
    ],
    projects: [
        {
            name: 'Telemetry Console',
            description:
                'An open-source operations dashboard that turns service health, traces, and release data into one focused view.',
            technologies: ['Vue', 'D3', 'OpenTelemetry'],
            githubUrl: 'https://github.com/yourusername/telemetry-console',
            liveUrl: 'https://example.com',
            highlights: [
                'Keyboard-first command palette',
                'Composable chart primitives',
            ],
        },
        {
            name: 'Patch Notes',
            description:
                'A lightweight release-notes workflow that helps small teams write, review, and publish product updates.',
            technologies: ['TypeScript', 'Node.js', 'SQLite'],
            githubUrl: 'https://github.com/yourusername/patch-notes',
            highlights: ['Markdown publishing', 'Automated changelog imports'],
        },
    ],
    skills: [
        {
            category: 'Languages',
            items: ['JavaScript', 'TypeScript', 'Python', 'SQL'],
        },
        {
            category: 'Frontend',
            items: ['Vue', 'React', 'Vite', 'CSS', 'Accessibility'],
        },
        {
            category: 'Backend',
            items: ['Node.js', 'Express', 'GraphQL', 'REST APIs'],
        },
        { category: 'Data', items: ['PostgreSQL', 'SQLite', 'Redis'] },
        {
            category: 'Cloud / DevOps',
            items: ['AWS', 'Docker', 'GitHub Actions', 'Terraform'],
        },
        {
            category: 'Tools',
            items: ['Git', 'Figma', 'Playwright', 'OpenTelemetry'],
        },
    ],
    certifications: [
        {
            name: 'Network+',
            issuer: 'CompTIA',
            date: 'March 2026',
        },
    ],
    awards: [
        {
            title: 'Engineering Impact Award',
            description:
                'Recognized for improving release confidence across the product organization.',
            year: '2023',
        },
    ],
    interests: [
        'Urban cycling',
        'Print design',
        'Open-source software',
        'Coffee',
        'Long-form journalism',
    ],
};
