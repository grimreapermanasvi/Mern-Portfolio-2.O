import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'tasmirolislam@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Manasvi, I am reaching out to you because...',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: '' },
    { name: 'linkedin', url: '' },
    { name: 'facebook', url: '' },
];

export const PROJECTS: IProject[] = [
    {
        title: 'EXAMPLE 1',
        slug: 'example 1',
        liveUrl: '',
        year: 2025,
        description: `
            This is an example project description. It should provide a brief overview of the project, its purpose, and any notable features or technologies used.
      `,
        role: `
      Full-Stack Developer 
      `,
        techStack: ['React', 'Next.js', 'Node.js'],
        thumbnail:
            '/projects/thumbnail/photo-1575936123452-b67c3203c357 (1).jpg',
        longThumbnail: '/projects/long/photo-1575936123452-b67c3203c357.jpg',
        images: ['/projects/images/images.jpg', '/projects/images/images.jpg'],
    },
    {
        title: 'Example 2 ',
        slug: 'example 2',
        techStack: ['React', 'Next.js', 'Node.js'],
        thumbnail:
            '/projects/thumbnail/photo-1575936123452-b67c3203c357 (1).jpg',
        longThumbnail: '/projects/long/photo-1575936123452-b67c3203c357.jpg',
        images: ['/projects/images/images.jpg', '/projects/images/images.jpg'],

        year: 2023,
        description: `This is another example project description. It should provide a brief overview of the project, its purpose, and any notable features or technologies used.`,
        role: `.`,
    },
];
