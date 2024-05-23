// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'fayolistic', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/fayolistic/fayolistic.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/fayolistic/portfolio, then set base to '/portfolio/'.
   */
  base: '/gitprofile/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['fayolistic/my-project1', 'fayolistic/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['fayolistic/gitprofile', 'fayolistic/portfolio-website'], // List of repository names to display. example: ['fayolistic/my-project1', 'fayolistic/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Traidr',
          description:
            'Traidr is an online local community marketplace facilitating the buying and selling of pre-owned goods such as furniture, appliances, clothing, and antiques, catering to the expanding market demand, which has seen a significant increase of over 30% in recent years.',
          imageUrl:
            'https://dragon.online-convert.com/download-file/4e6e7154-706a-4730-b1d1-f211605b2fd8/f417c136-214e-42c4-84bf-b03b5340e829',
          link: 'https://example.com',
        },
        {
          title: 'QuickGrade App',
          description:
            'Quick Grade, a user-friendly and robust platform, to enhance the learning journey for students, witnessing a remarkable growth of over 40% in user enrollment and engagement, reflecting the growing demand for efficient assessment solutions among students striving for academic excellence',
          imageUrl:
            'https://dragon.online-convert.com/download-file/f9170c8f-99db-41c5-b914-246c6023b6f7/9904c7c9-52ed-48a4-872e-bd704ca52d49',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Olamiposi Adekola',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'olamiposi-adekola-00268a201',
    twitter: 'De_playful',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'olamiposiadekola31@gmail.com',
  },
  resume: {
    fileUrl: 'https://flowcv.com/resume/sqsittftpd', // Empty fileUrl will hide the `Download Resume` button.
    //
  },
  skills: [
    'TypeScript',
    'JavaScript',
    'React.js',
    'React Native',
    'Node.js',
    'Nest.js',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'Html',
    'CSS',
    'Tailwind',
  ],
  experiences: [
    {
      company: 'Decagon',
      position: 'Associate Software Engineer',
      from: 'January  2023',
      to: 'Present',
      companyLink: 'https://example.com',
    },
    {
      company: 'Speedaf Express',
      position: 'Data Analyst',
      from: 'September 2020',
      to: 'January 2023',
      companyLink: 'https://example.com',
    },
  ],
  certifications: [
    {
      name: 'Scrum Fundamental Certficate',
      body: 'SFC',
      year: '2023',
      link: 'https://example.com',
    },
  ],
  educations: [
    {
      institution: 'Decagon Software Engineering Institute',
      degree: 'Diploma',
      from: 'January 2023',
      to: 'December 2023',
    },
    {
      institution: 'Yaba College Of Technology',
      degree: 'HND',
      from: '2016',
      to: '2018',
    },
  ],
  publications: [
    {
      title: 'Publication Title',
      conferenceName: '',
      journalName: 'Journal Name',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      title: 'Publication Title',
      conferenceName: 'Conference Name',
      journalName: '',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'cupcake',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/fayolistic/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
