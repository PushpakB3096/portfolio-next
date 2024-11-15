export interface Project {
  id: string;
  title: string;
  category: string;
  date: string;
  image: string;
  tags: string[];
  description: string;
  overview: string;
  features: Array<{
    title: string;
    description: string;
  }>;
  technologies: string[];
  demoLink: string;
  githubLink: string;
  gallery: string[];
}

export const projects: Project[] = [
  {
    id: 'analytics-dashboard',
    title: 'Analytics Dashboard',
    category: 'web',
    date: '2024',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop',
    tags: ['React', 'Node.js', 'D3.js'],
    description: 'Real-time analytics dashboard with interactive data visualization.',
    overview: 'A comprehensive analytics dashboard that provides real-time insights and interactive data visualization tools. Built with modern web technologies to ensure high performance and scalability. The dashboard allows users to monitor key metrics, generate custom reports, and analyze data trends in real-time.',
    features: [
      {
        title: 'Real-time Analytics',
        description: 'Monitor your data in real-time with automatic updates and notifications.'
      },
      {
        title: 'Custom Reports',
        description: 'Generate and export custom reports based on your specific requirements.'
      },
      {
        title: 'Interactive Visualizations',
        description: 'Explore your data through interactive charts and graphs powered by D3.js.'
      },
      {
        title: 'Performance Metrics',
        description: 'Track key performance indicators and metrics in real-time.'
      }
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'D3.js', 'WebSocket', 'Redis'],
    demoLink: 'https://demo.example.com',
    githubLink: 'https://github.com/yourusername/project',
    gallery: [
      'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1557821956-31f666ce48db?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1557821558-5fa41d8bf1e2?w=800&h=500&fit=crop'
    ]
  },
  {
    id: 'food-delivery-app',
    title: 'Food Delivery App',
    category: 'mobile',
    date: '2024',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1200&h=800&fit=crop',
    tags: ['Flutter', 'Firebase', 'Node.js'],
    description: 'Mobile app for food delivery with real-time tracking.',
    overview: 'A comprehensive food delivery platform built with Flutter and Firebase. Features include real-time order tracking, secure payment processing, and an intuitive user interface. The app connects customers with local restaurants and provides a seamless ordering experience.',
    features: [
      {
        title: 'Real-time Tracking',
        description: 'Track your order in real-time with live map updates and delivery status.'
      },
      {
        title: 'Secure Payments',
        description: 'Multiple payment options with secure payment processing.'
      },
      {
        title: 'Restaurant Dashboard',
        description: 'Dedicated dashboard for restaurants to manage orders and menu items.'
      },
      {
        title: 'Smart Recommendations',
        description: 'Personalized food recommendations based on order history and preferences.'
      }
    ],
    technologies: ['Flutter', 'Firebase', 'Google Maps API', 'Stripe', 'Node.js'],
    demoLink: 'https://demo.example.com',
    githubLink: 'https://github.com/yourusername/project',
    gallery: [
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=500&fit=crop'
    ]
  },
  {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    category: 'web',
    date: '2024',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&h=800&fit=crop',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    description: 'Modern portfolio website with smooth animations.',
    overview: 'A personal portfolio website showcasing projects and skills. Built with modern web technologies and features smooth animations and responsive design. The site provides an engaging user experience while maintaining a clean and professional design.',
    features: [
      {
        title: 'Responsive Design',
        description: 'Fully responsive layout that works seamlessly across all devices.'
      },
      {
        title: 'Smooth Animations',
        description: 'Custom animations and transitions for an engaging user experience.'
      },
      {
        title: 'Project Showcase',
        description: 'Detailed project pages with comprehensive information and images.'
      },
      {
        title: 'Contact Integration',
        description: 'Integrated contact form with email notification system.'
      }
    ],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    demoLink: 'https://demo.example.com',
    githubLink: 'https://github.com/yourusername/project',
    gallery: [
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=500&fit=crop'
    ]
  }
];

export const getTechIcon = (tech: string): string => {
  const icons: { [key: string]: string } = {
    'React': 'fab fa-react',
    'Node.js': 'fab fa-node-js',
    'MongoDB': 'fas fa-database',
    'Firebase': 'fas fa-fire',
    'Flutter': 'fas fa-mobile-alt',
    'HTML5': 'fab fa-html5',
    'CSS3': 'fab fa-css3-alt',
    'JavaScript': 'fab fa-js',
    'TypeScript': 'fas fa-code',
    'Python': 'fab fa-python',
    'AWS': 'fab fa-aws',
    'Docker': 'fab fa-docker',
    'Git': 'fab fa-git-alt',
    'Redis': 'fas fa-server',
    'GraphQL': 'fas fa-project-diagram',
    'Next.js': 'fab fa-react',
    'Tailwind CSS': 'fab fa-css3',
    'D3.js': 'fas fa-chart-line',
    'WebSocket': 'fas fa-plug',
    'Stripe': 'fab fa-stripe',
    'Google Maps API': 'fas fa-map-marker-alt',
    'Framer Motion': 'fas fa-magic',
    'default': 'fas fa-code'
  };
  
  return icons[tech] || icons.default;
};

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

export const getProjectsByCategory = (category: string): Project[] => {
  return category === 'all' 
    ? projects 
    : projects.filter(project => project.category === category);
};