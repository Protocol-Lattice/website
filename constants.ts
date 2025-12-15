import type { Project, NavItem, Collaboration } from './types';

export const ACCENT_COLORS = {
  emerald: '#10b981',
  violet: '#8b5cf6',
  blue: '#3b82f6',
  cyan: '#06b6d4',
};

export const COMPANY_INFO = {
  name: 'Protocol Lattice',
  handle: 'ProtocolLattice',
  email: 'kmosc@protonmail.com',
  shortPitch: 'Open Source Tools for Modern Developers',
  longBio: 'Protocol Lattice is a GitHub organization dedicated to building and maintaining high-quality open source developer tools. We create frameworks, libraries, and protocols that help developers build better software faster.',
  heroTitle: 'Build Better Software',
  heroSubtitle: 'Open source developer tools that are production-ready, well-documented, and built with love.',
  tagline: 'Empowering developers with tools that just work.',
  availability: 'Open to collaboration and contributions from the community.',
};

export const STATS = [
  { label: 'Open Source Repos', value: '10+' },
  { label: 'GitHub Stars', value: '500+' },
  { label: 'Contributors', value: '1' },
  { label: 'Languages', value: '5+' },
];

export const SOCIAL_LINKS = {
  github: 'https://github.com/protocol-lattice',
  utcpOrg: 'https://github.com/universal-tool-calling-protocol',
  utcpWebsite: 'https://utcp.io',
};

export const PROJECTS: Project[] = [
  {
    name: 'grpc_graphql_gateway',
    displayName: 'gRPC GraphQL Gateway',
    description: 'A protoc plugin that generates GraphQL execution code from Protocol Buffers. Features Apollo Federation v2, subscriptions, file uploads, and production-ready capabilities.',
    repoUrl: 'https://github.com/Protocol-Lattice/grpc_graphql_gateway',
    websiteUrl: 'https://protocol-lattice.github.io/grpc_graphql_gateway/',
    tags: ['Rust', 'GraphQL', 'gRPC', 'Protobuf', 'Federation'],
    isFeatured: true,
    quickstart: 'cargo add grpc_graphql_gateway',
    content: {
      problem: 'Bridging gRPC services with GraphQL clients requires complex manual integration and lacks production features.',
      solution: 'grpc_graphql_gateway automatically generates GraphQL schemas from protobuf with full federation support and enterprise features.',
      features: [
        'Dynamic GraphQL schema from protobuf',
        'Apollo Federation v2 with entity resolution',
        'WebSocket subscriptions (graphql-ws)',
        'Response caching with LRU and TTL',
        'Circuit breaker for fault tolerance',
        'Prometheus metrics and OpenTelemetry tracing',
        'Query whitelisting for security',
        'Response compression (gzip/brotli)',
      ],
    },
  },
  {
    name: 'rs-utcp',
    displayName: 'rs-utcp',
    description: 'Official Rust implementation of the Universal Tool Calling Protocol. Supports 12 communication protocols including HTTP, MCP, WebSocket, gRPC, and WebRTC.',
    repoUrl: 'https://github.com/universal-tool-calling-protocol/rs-utcp',
    websiteUrl: 'https://utcp.io',
    tags: ['Rust', 'UTCP', 'AI', 'Tools', 'Protocols'],
    isFeatured: true,
    quickstart: 'cargo add rs-utcp',
    content: {
      problem: 'AI agents need a unified way to discover and call tools across different protocols and services.',
      solution: 'rs-utcp provides a single Rust library that speaks 12 protocols, enabling seamless tool integration for AI agents.',
      features: [
        '12 communication protocols supported',
        'Async/await native with Tokio',
        'Config-driven tool discovery',
        'OpenAPI automatic tool generation',
        'LLM orchestration with Codemode',
        'Multi-auth support (API keys, OAuth2)',
        'First-class streaming support',
        '90+ tests for reliability',
      ],
    },
  },
  {
    name: 'go-utcp',
    displayName: 'go-utcp',
    description: 'Official Go implementation of the Universal Tool Calling Protocol. Built-in transports for HTTP, CLI, SSE, GraphQL, MCP, and UDP.',
    repoUrl: 'https://github.com/universal-tool-calling-protocol/go-utcp',
    websiteUrl: 'https://utcp.io',
    tags: ['Go', 'UTCP', 'AI', 'Tools', 'Protocols'],
    isFeatured: true,
    quickstart: 'go get github.com/universal-tool-calling-protocol/go-utcp',
    content: {
      problem: 'Go developers need a native implementation of UTCP to integrate AI tool calling into their applications.',
      solution: 'go-utcp provides a complete Go SDK with multiple transports, OpenAPI conversion, and CodeMode support.',
      features: [
        'HTTP, CLI, SSE, GraphQL, MCP, UDP transports',
        'Environment variable substitution',
        'In-memory provider repository',
        'OpenAPI to UTCP converter',
        'CodeMode plugin for code execution',
        'ChainMode for tool chaining',
      ],
    },
  },
  {
    name: 'go-agent',
    displayName: 'go-agent',
    description: 'A powerful agent framework for Go with graph-aware memory, native UTCP tools, and multi-agent orchestration. Production-ready.',
    repoUrl: 'https://github.com/protocol-lattice/go-agent',
    tags: ['Go', 'AI', 'Agents', 'Framework'],
    isFeatured: true,
    quickstart: 'go get github.com/protocol-lattice/go-agent',
    content: {
      problem: 'Building sophisticated AI agents in Go requires integrating multiple complex components: memory, tool use, and agent-to-agent communication.',
      solution: 'go-agent provides production-grade building blocks with a unique graph-aware memory system and native UTCP support.',
      features: [
        'Graph-aware, multi-vector memory system',
        'Native UTCP support for tool calling',
        'Multi-agent orchestration patterns',
        'High performance and scalability',
        'Pluggable architecture',
        'Agent as UTCP tools'
      ],
    },
  },
  {
    name: 'thunder',
    displayName: 'Thunder',
    description: 'High-performance API gateway supporting gRPC, GraphQL, and REST. Unified interface for microservices.',
    repoUrl: 'https://github.com/Protocol-Lattice/thunder',
    tags: ['Go', 'gRPC', 'GraphQL', 'REST', 'Gateway'],
    isFeatured: false,
    content: {
      problem: 'Managing multiple API protocols across microservices is complex and error-prone.',
      solution: 'Thunder provides a unified gateway that speaks gRPC, GraphQL, and REST natively.',
      features: [
        'Multi-protocol support',
        'High throughput',
        'Easy configuration',
      ],
    },
  },
  {
    name: 'GoEventBus',
    displayName: 'GoEventBus',
    description: 'Lightweight event bus for Go enabling decoupled, asynchronous communication between components.',
    repoUrl: 'https://github.com/Protocol-Lattice/GoEventBus',
    tags: ['Go', 'Events', 'PubSub'],
    isFeatured: false,
    quickstart: 'go get github.com/Protocol-Lattice/GoEventBus',
    content: {} as any,
  },
  {
    name: 'memory-bank-mcp',
    displayName: 'Memory Bank MCP',
    description: 'A structured memory system for AI agents with multi-vector embeddings and persistence.',
    repoUrl: 'https://github.com/Protocol-Lattice/memory-bank-mcp',
    tags: ['Go', 'AI', 'Memory', 'MCP'],
    isFeatured: false,
    content: {} as any,
  },
  {
    name: 'code-runner-mcp',
    displayName: 'Code Runner MCP',
    description: 'Safely execute and orchestrate code with context propagation and MCP tool integration.',
    repoUrl: 'https://github.com/Protocol-Lattice/code-runner-mcp',
    tags: ['Go', 'MCP', 'Execution', 'Tools'],
    isFeatured: false,
    content: {} as any,
  },
];

export const COLLABORATIONS: Collaboration[] = [
  {
    name: 'Universal Tool Calling Protocol',
    description: 'We are core contributors to UTCP, a standard that enables AI agents to discover and call tools using native protocols.',
    href: 'https://utcp.io',
    icon: 'utcp'
  }
];

export const FEATURES = [
  {
    icon: 'code',
    title: 'Production Ready',
    description: 'Battle-tested tools designed for real-world use cases, not just demos.'
  },
  {
    icon: 'book',
    title: 'Well Documented',
    description: 'Comprehensive docs, examples, and guides to get you started quickly.'
  },
  {
    icon: 'users',
    title: 'Community Driven',
    description: 'Built by developers, for developers. Contributions welcome.'
  },
  {
    icon: 'zap',
    title: 'High Performance',
    description: 'Optimized for speed and efficiency without sacrificing usability.'
  }
];

export const FAQS = [
  {
    question: "What is Protocol Lattice?",
    answer: "Protocol Lattice is a GitHub organization focused on building open source developer tools. We create frameworks, libraries, and protocols that help developers build better software."
  },
  {
    question: "How can I contribute?",
    answer: "All our projects are open source! Check out our GitHub organization, pick a project that interests you, and start contributing. We welcome PRs, issues, and discussions."
  },
  {
    question: "What languages do you support?",
    answer: "Our primary focus is Go, but we also maintain tools in TypeScript, Python, and Rust. We believe in using the right tool for the job."
  },
  {
    question: "Are these tools free to use?",
    answer: "Yes! All our tools are open source under permissive licenses (MIT/Apache 2.0). Use them freely in personal or commercial projects."
  }
];

export const NAV_ITEMS: NavItem[] = [
  { href: '#/projects', label: 'Projects' },
  { href: '#/consultancy', label: 'Consultancy' },
  { href: '#/about', label: 'About' },
  { href: '#/contact', label: 'Contact' },
];
