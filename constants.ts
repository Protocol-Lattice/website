import type { Project, NavItem, Collaboration } from './types';

export const ACCENT_COLORS = {
  emerald: '#4ade80',
  sapphire: '#3b82f6',
};

export const COMPANY_INFO = {
  name: 'Protocol Lattice',
  handle: 'ProtocolLattice',
  email: 'kmosc@protonmail.com',
  shortPitch: 'Weaving the fabric of intelligent systems.',
  longBio: 'Protocol Lattice is a research collective dedicated to designing and implementing open standards for AI interaction, tooling, and memory. We build interconnected, protocol-first infrastructure to ensure interoperability and advance the frontier of autonomous systems.',
  heroTitle: 'Weaving the Fabric of AI.',
  heroSubtitle: 'We build the open-source protocols and frameworks that enable interoperable, intelligent systems.',
  availability: 'Open to collaboration and strategic partnerships.',
};

export const SOCIAL_LINKS = {
  github: 'https://github.com/protocol-lattice',
  utcpOrg: 'https://github.com/universal-tool-calling-protocol',
  utcpWebsite: 'https://utcp.io',
};

export const PROJECTS: Project[] = [
  {
    name: 'go-utcp',
    description: 'The official Go implementation of UTCP, maintained by Protocol Lattice. Define and call tools directly over native channels without wrapper servers.',
    repoUrl: 'https://github.com/universal-tool-calling-protocol/go-utcp',
    websiteUrl: SOCIAL_LINKS.utcpWebsite,
    tags: ['Go', 'Protocols', 'UTCP', 'AI'],
    isFeatured: true,
    quickstart: 'go get github.com/universal-tool-calling-protocol/go-utcp',
    content: {
      problem: 'Calling functions or tools across different services and languages for AI agents often requires complex boilerplate, custom servers, and brittle integrations.',
      solution: 'go-utcp provides a native Go implementation of the UTCP standard. It allows tools to be defined once and called seamlessly over any transport that supports channels, eliminating the need for intermediary HTTP/gRPC servers for tool execution.',
      features: [
        'Schema-first tool definition',
        'Transport-agnostic communication',
        'Type-safe function calls',
        'Minimal performance overhead',
        'Official implementation of the UTCP standard',
      ],
    },
  },
  {
    name: 'lattice-agent',
    displayName: 'lattice-agent',
    description: 'An agent framework for Go with graph-aware memory, UTCP-native tools, and multi-agent orchestration. Built for production.',
    repoUrl: 'https://github.com/protocol-lattice/lattice-agent',
    tags: ['Go', 'Agents', 'AI', 'Infra'],
    isFeatured: true,
    quickstart: 'go get github.com/protocol-lattice/lattice-agent',
     content: {
      problem: 'Building sophisticated AI agents in Go requires integrating multiple complex components: memory, tool use, and agent-to-agent communication. Existing frameworks are often too simplistic or not production-ready.',
      solution: 'lattice-agent is a comprehensive framework that provides production-grade building blocks for agentic systems. It features a unique graph-aware memory system and native support for UTCP, enabling developers to build powerful, scalable multi-agent applications.',
      features: [
        'Graph-aware, multi-vector memory system',
        'Native UTCP support for tool calling',
        'Multi-agent orchestration and communication patterns',
        'Designed for high performance and scalability',
        'Pluggable architecture for custom components',
      ],
    },
  },
  {
    name: 'Thunder',
    description: 'Minimalist Go backend framework that turns gRPC services into REST and GraphQL APIs with near-zero friction.',
    repoUrl: 'https://github.com/protocol-lattice/thunder',
    tags: ['Go', 'Infra', 'gRPC', 'GraphQL'],
    isFeatured: true,
    quickstart: 'go get github.com/protocol-lattice/thunder',
     content: {
      problem: 'Exposing a single gRPC service via multiple API paradigms (like REST and GraphQL) typically involves writing and maintaining separate, redundant gateway layers, increasing complexity and development time.',
      solution: 'Thunder is a lightweight framework that automatically generates REST and GraphQL endpoints from your existing gRPC service definitions. It acts as a smart proxy, reducing boilerplate and ensuring consistency across all your APIs.',
      features: [
        'Automatic gRPC to REST/GraphQL conversion',
        'Near-zero configuration setup',
        'High-performance reverse proxy',
        'Extensible with custom middleware',
        'Simplifies backend architecture significantly',
      ],
    },
  },
];

export const COLLABORATIONS: Collaboration[] = [
  {
    name: 'Universal Tool Calling Protocol',
    description: 'We are proud stewards and core contributors to UTCP, an open standard for defining and calling tools across different services and languages.',
    href: 'https://utcp.io',
    icon: 'utcp'
  }
];

export const FAQS = [
    {
        question: "Do you offer enterprise support or consulting?",
        answer: "Yes, we offer enterprise support contracts for our open-source projects and provide consulting services for agent architecture, UTCP integration, and performance optimization."
    },
    {
        question: "What technologies do you build with?",
        answer: "Our core stack includes Go, UTCP, Qdrant/pgvector for memory, gRPC, and GraphQL. We believe in using the right tool for the job, with a focus on performance and stability."
    },
    {
        question: "What is your open-source philosophy?",
        answer: "Build practical, well-documented tools and protocols that solve real problems. We focus on clean APIs, long-term maintainability, and fostering community collaboration."
    }
]

export const WRITING_POSTS = [
    {
        slug: 'stewarding-utcp-collaboration',
        title: 'Stewarding an Open Standard: Our Work on UTCP',
        date: '2024-08-01',
        description: 'An overview of our commitment to the Universal Tool Calling Protocol, our role as core contributors, and why open standards are critical for the future of interoperable AI.',
        tags: ['UTCP', 'Open Source', 'Collaboration', 'Protocols'],
    },
    {
        slug: 'utcp-in-practice',
        title: 'UTCP in Practice: Calling Tools Without Middleware (Go)',
        date: '2024-07-15',
        description: 'A deep dive into using the Universal Tool Calling Protocol in a real-world Go application, showing how to eliminate boilerplate and simplify agent architecture.',
        tags: ['Go', 'UTCP', 'AI', 'Tutorial'],
    },
    {
        slug: 'graph-multi-vector-memory',
        title: 'Graph + Multi-Vector Memory for Agents in Go',
        date: '2024-06-28',
        description: 'Exploring an advanced memory architecture for AI agents that combines graph databases with multiple vector embeddings to enable complex reasoning and context retrieval.',
        tags: ['Go', 'AI', 'Agents', 'Data Structures'],
    }
]

export const NAV_ITEMS: NavItem[] = [
    { href: '#/projects', label: 'Projects' },
    { href: '#/writing', label: 'Research' },
    { href: '#/about', label: 'About' },
    { href: '#/contact', label: 'Contact' },
]

export const TECHNOLOGIES = ['Go (Golang)', 'gRPC', 'GraphQL', 'PostgreSQL', 'Docker', 'Kubernetes', 'Prometheus', 'Vector Databases (Qdrant, pgvector)', 'Protocols', 'Distributed Systems'];