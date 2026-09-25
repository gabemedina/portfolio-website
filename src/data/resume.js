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
        'Recent computer science graduate with hands-on experience in networking, systems administration, and cloud technologies. Skilled in configuring secure environments, and troubleshooting technical issues. Eager to apply strong analytical and problem-solving skills while continuing to grow through practical experience and industry certifications.',
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
                'A Proxmox-based home lab setup for testing and learning networking, virtualization, and containerization technologies.',
            technologies: ['Proxmox', 'Docker', 'Kubernetes'],
            githubUrl: 'https://github.com/yourusername/telemetry-console',
            // liveUrl: 'https://example.com',
        },
        {
            name: 'Active Directory & Identity Management Setup',
            image: activeDirectoryImage,
            imageAlt: 'Active Directory & Identity Management Setup',
            description:
                'A comprehensive Active Directory setup for managing users, groups, and policies in a Windows Server environment.',
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
                'A deployment of cloud-based threat intelligence tools and honeypots for monitoring and analyzing cyber threats.',
            technologies: ['Python', 'Docker', 'Kubernetes'],
            githubUrl: 'https://github.com/yourusername/patch-notes',
        },
        {
            name: 'Weight Training App',
            image: trainingAppImage,
            imageAlt: 'Weight Training App',
            description:
                'A web application for tracking weight training exercises, sets, and reps, with user authentication and data visualization features.',
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
