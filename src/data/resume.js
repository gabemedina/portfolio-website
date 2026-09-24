import activeDirectoryImage from '../media/active_directory.png';
import homelabImage from '../media/homelab.png';
import honeypotImage from '../media/honeypot.png';
import trainingAppImage from '../media/training_app.png';

export const resume = {
    personal: {
        name: 'Gabriel Medina',
        title: '',
        introduction: '',
        location: 'New Orleans, LA',
        email: 'gabrielmedina1@proton.me',
        resumeUrl: '/Gabriel_Medina_Resume.pdf',
        links: [
            {
                label: 'LinkedIn',
                url: 'https://www.linkedin.com/in/gabriel-medina-tfbtih',
            },
            { label: 'GitHub', url: 'https://github.com/gabemedina' },
        ],
    },
    summary:
        'Product-minded engineer with six years of experience designing and shipping web applications. I enjoy turning ambiguous problems into calm, useful software—and leaving the codebase clearer than I found it.',
    currentlyWorkingOn: '',
    experience: [
        // {
        //     company: 'Northstar Labs',
        //     title: 'Senior Software Engineer',
        //     location: 'Chicago, IL · Hybrid',
        //     startDate: '2022',
        //     endDate: 'Present',
        //     description:
        //         'Lead frontend architecture for a workflow platform used by operations teams across North America.',
        //     accomplishments: [
        //         'Reworked the application shell and shared component system, cutting feature delivery time by roughly 30%.',
        //         'Introduced performance budgets and observability that reduced median page-load time from 2.8s to 1.4s.',
        //         'Mentor four engineers and partner with design on accessible interaction patterns.',
        //     ],
        //     technologies: ['Vue', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS'],
        // },
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
            name: 'Home Network Lab',
            image: homelabImage,
            imageAlt: 'Home Network Lab',
            description:
                'An open-source operations dashboard that turns service health, traces, and release data into one focused view.',
            technologies: ['Proxmox', 'Docker', 'Kubernetes'],
            githubUrl: 'https://github.com/yourusername/telemetry-console',
            // liveUrl: 'https://example.com',
        },
        {
            name: 'Active Directory & Identity Management Setup',
            image: activeDirectoryImage,
            imageAlt: 'Active Directory & Identity Management Setup',
            description:
                'A lightweight release-notes workflow that helps small teams write, review, and publish product updates.',
            technologies: [
                'Windows Server',
                'Active Directory',
                'Group Policy',
            ],
            githubUrl: 'https://github.com/yourusername/patch-notes',
        },
        {
            name: 'Cloud Threat Intelligence & Honeypot Deployment',
            image: honeypotImage,
            imageAlt: 'Cloud Threat Intelligence & Honeypot Deployment',
            description:
                'A lightweight release-notes workflow that helps small teams write, review, and publish product updates.',
            technologies: ['Python', 'Docker', 'Kubernetes'],
            githubUrl: 'https://github.com/yourusername/patch-notes',
        },
        {
            name: 'Weight Training App',
            image: trainingAppImage,
            imageAlt: 'Weight Training App',
            description:
                'A lightweight release-notes workflow that helps small teams write, review, and publish product updates.',
            technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
            githubUrl: 'https://github.com/yourusername/patch-notes',
        },
    ],
    skills: [
        {
            category: 'Networking',
            items: ['TCP/IP', 'DNS', 'Firewalls', 'VPN', 'Wireshark'],
        },
        {
            category: 'Cloud & DevOps',
            items: ['AWS', 'Azure', 'Docker', 'GitHub Actions', 'Terraform'],
        },
        {
            category: 'Systems & Infrastructure',
            items: [
                'Linux',
                'Windows Server',
                'Active Directory',
                'Group Policy',
            ],
        },
        {
            category: 'Languages',
            items: ['Python', 'JavaScript', 'SQL', 'Java'],
        },
        {
            category: 'Scripting & Automation',
            items: ['Bash', 'PowerShell', 'Git', 'REST APIs'],
        },
        {
            category: 'Backend & Databases',
            items: ['PostgreSQL', 'Node.js', 'Express', 'GraphQL'],
        },
    ],
    certifications: [
        {
            name: 'Network+',
            issuer: 'CompTIA',
            date: 'March 2026',
        },
    ],
    // awards: [
    //     {
    //         title: '',
    //         description:
    //             '',
    //         year: '',
    //     },
    // ],
    // interests: [
    //       ' ',
    // ],
};
