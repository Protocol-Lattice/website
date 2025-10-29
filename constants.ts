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
  longBio: 'Protocol Lattice is a GitHub organization building the open-source go-agent framework and companion tooling for interoperable, production-ready AI agents',
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
    name: 'go-agent',
    displayName: 'go-agent',
    description: 'An agent framework for Go with graph-aware memory, UTCP-native tools, and multi-agent orchestration. Built for production.',
    repoUrl: 'https://github.com/protocol-lattice/go-agent',
    tags: ['Go', 'Agents', 'AI', 'Infra'],
    isFeatured: true,
    quickstart: 'go get github.com/protocol-lattice/go-agent',
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
];

export const COLLABORATIONS: Collaboration[] = [
  {
    name: 'Universal Tool Calling Protocol',
    description: 'We are proud stewards and core contributors to UTCP.',
    href: 'https://utcp.io',
    icon: 'utcp'
  }
];

export const FAQS = [
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
        content: `The history of technology is a story of standards. From the humble USB port to the TCP/IP suite that powers the internet, open standards are the invisible bedrock upon which innovation is built. They create interoperability, foster competition, and prevent vendor lock-in, ultimately empowering builders and benefiting users.

In the rapidly evolving world of AI, the need for a common language for tool interaction has never been more apparent. As developers build increasingly complex agentic systems, they face a recurring problem: how can an AI agent reliably call a function or tool that might be running in a different service, written in a different language, or hosted on a different machine? The ad-hoc solutions—custom REST APIs, one-off RPC clients—are brittle, inefficient, and create a fragmented ecosystem.

## The Case for UTCP

This is the problem the Universal Tool Calling Protocol (UTCP) was designed to solve. UTCP is a specification that defines a standard, transport-agnostic way for systems to declare their available tools and for other systems to call them. It's not a new framework or a specific library; it's a protocol.

By adopting UTCP, developers can:
* **Decouple Tool Definition from Implementation:** Define a tool once using a simple schema, and it can be called from any UTCP-compliant client, regardless of the underlying transport (gRPC, WebSockets, or even in-process channels).
* **Eliminate Boilerplate:** No more writing custom server wrappers or client libraries for every tool. The protocol handles the discovery and invocation mechanics.
* **Promote Interoperability:** A tool built by one team in Go can be seamlessly called by an agent built by another team in Python, fostering a rich, interoperable ecosystem of AI capabilities.

## Our Role as Stewards

At Protocol Lattice, we believe deeply in the power of open, protocol-first infrastructure. It's in our name. That's why we have taken on the role of core contributors and stewards of the UTCP standard. Our responsibilities include:

* **Maintaining the Go Implementation:** We are the primary maintainers of \`go-utcp\`, the official, production-ready implementation of the protocol for the Go ecosystem.
* **Guiding the Specification:** We actively participate in the evolution of the UTCP specification, helping to refine its features, ensure its stability, and guide its future direction.
* **Fostering Adoption:** We work to promote the benefits of UTCP through articles like this one, technical tutorials, and by integrating it as a first-class citizen in our own open-source projects like \`lattice-agent\`.

We see UTCP not just as a technical convenience but as a critical piece of infrastructure for the future of AI. By creating a lingua franca for tool interaction, we can collectively build more robust, scalable, and interconnected intelligent systems. We are proud to be at the forefront of this effort and invite the community to join us in building a more open and interoperable AI ecosystem.`,
    },
    {
        slug: 'utcp-in-practice',
        title: 'UTCP in Practice: Calling Tools Without Middleware (Go)',
        date: '2024-07-15',
        description: 'A deep dive into using the Universal Tool Calling Protocol in a real-world Go application, showing how to eliminate boilerplate and simplify agent architecture.',
        tags: ['Go', 'UTCP', 'AI', 'Tutorial'],
        content: `One of the most powerful features of the Universal Tool Calling Protocol (UTCP) is its ability to operate over any transport that supports channels. This allows for incredibly efficient, low-latency tool calls without the overhead of traditional HTTP or gRPC servers.

In this tutorial, we'll walk through a practical example using \`go-utcp\` to define a tool and call it directly over a native Go channel. This pattern is ideal for communication between goroutines, in-process agents, or any scenario where you want the logical separation of a service call without the performance penalty of network serialization.

## Step 1: Define Your Tool

First, let's define a simple tool. Imagine we have a weather service that can fetch the current temperature for a given city. Using UTCP, we define the input and output schemas.

\`\`\`go
package main

import (
	"context"
	"fmt"
	"time"

	"github.com/universal-tool-calling-protocol/go-utcp"
)

// Define the tool's function signature.
func GetWeather(ctx context.Context, city string) (string, error) {
	// In a real app, you'd call a weather API here.
	return fmt.Sprintf("The weather in %s is 72°F and sunny.", city), nil
}

// Define the UTCP tool specification.
var WeatherTool = utcp.Tool{
	Name:        "get_weather",
	Description: "Get the current weather for a specific city.",
	InputSchema: utcp.Schema{
		Type: "string",
		Description: "The city name, e.g., 'San Francisco'.",
	},
	Sync: GetWeather, // Wire the function to the spec
}
\`\`\`

Here, we've created a \`utcp.Tool\` struct that describes our \`GetWeather\` function. We've provided a name, a description, and a schema for the input. Crucially, we've wired our actual Go function directly to the \`Sync\` field.

## Step 2: Set Up the Channel-Based Transport

Next, we need a "transport" for our tool calls. Instead of setting up an HTTP server, we'll create a simple UTCP transport that operates over a Go channel.

\`\`\`go
func main() {
	// Create a new UTCP router and register our tool.
	router := utcp.NewRouter()
	router.Register(WeatherTool)

	// Create a transport that uses native Go channels.
	// This simulates a direct, in-process connection.
	transport := utcp.NewChannelTransport()

	// Handle incoming requests on the transport by passing them to the router.
	go func() {
		for req := range transport.Requests() {
			go func(req utcp.Request) {
				res := router.Handle(context.Background(), req)
				transport.Respond(res)
			}(req)
		}
	}()

	// ... rest of the main function in the next step
}
\`\`\`

The \`utcp.NewChannelTransport\` creates a pair of channels: one for requests and one for responses. We start a goroutine to listen for incoming requests on this transport and pass them to our router, which knows how to invoke the correct tool.

## Step 3: Call the Tool

Now, from the "client" side (which in this case is just our main goroutine), we can make a call.

\`\`\`go
// ... continuing the main function
	fmt.Println("Calling the weather tool...")

	// Create a client that sends requests to our channel transport.
	client := utcp.NewClient(transport)

	// Make the tool call.
	call := utcp.Call{
		Tool:  "get_weather",
		Input: "New York",
	}

	// Use a timeout to avoid waiting forever.
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	response, err := client.Call(ctx, call)
	if err != nil {
		panic(err)
	}

	fmt.Printf("Response from tool: %s\\n", response.Output)
}
\`\`\`

When we run this, the output will be:
\`\`\`
Calling the weather tool...
Response from tool: The weather in New York is 72°F and sunny.
\`\`\`

We successfully called our tool through a structured, schema-driven protocol without writing a single line of server code. This is the power of UTCP's transport-agnostic design. It provides the architectural benefits of service-oriented design with the performance of a direct function call, simplifying your agent's internal communication patterns significantly.`,
    },
    {
        slug: 'graph-multi-vector-memory',
        title: 'Graph + Multi-Vector Memory for Agents in Go',
        date: '2024-06-28',
        description: 'Exploring an advanced memory architecture for AI agents that combines graph databases with multiple vector embeddings to enable complex reasoning and context retrieval.',
        tags: ['Go', 'AI', 'Agents', 'Data Structures'],
        content: `One of the biggest challenges in building sophisticated AI agents is designing a memory system that can both recall relevant facts and understand the complex relationships between them. Simple vector-based retrieval is powerful for semantic similarity but often fails to capture the rich, structured context of how information is connected.

For example, a standard vector store might know that "Alice" and "Project X" are semantically related because they appear in the same documents. But it doesn't inherently understand the *nature* of that relationship: does Alice *manage* Project X? Did she *propose* it? Is she a *stakeholder* in it?

This is where a hybrid memory architecture that combines graph databases with multi-vector embeddings offers a significant leap forward. At Protocol Lattice, this is the core memory model we're building into our \`lattice-agent\` framework.

## The Power of the Graph

A graph database excels at storing and querying relationships. In our agent's memory, we can model entities (like people, projects, companies, concepts) as nodes and their relationships as edges.

* **Node:** "Alice" (Type: Person)
* **Node:** "Project X" (Type: Project)
* **Edge:** "Alice" -> "MANAGES" -> "Project X"

This structured representation allows the agent to answer precise questions that are impossible for a simple vector store: "Who manages Project X?" or "List all projects managed by Alice."

## The Power of Vectors

Vector embeddings excel at capturing semantic nuance and similarity. A pure graph model is rigid; it can't answer questions like "Find me projects similar to Project X." This is where vectors shine.

However, a single vector embedding for a complex entity is often insufficient. An entity like "Alice" has multiple facets: her role as a manager, her technical skills, her communication style. A single vector averages these all together, losing critical detail.

## Multi-Vector: The Best of Both Worlds

Multi-vector memory involves creating separate vector embeddings for different aspects of a single entity. For the "Alice" node, we might generate and store multiple vectors:
* **Vector 1 (Role):** An embedding of text describing her role, responsibilities, and management style.
* **Vector 2 (Skills):** An embedding of her resume, code contributions, and technical documents she's authored.
* **Vector 3 (Communications):** An embedding of her emails and public communications to capture her tone and relationships.

When a query comes in, the agent can perform a semantic search against the most relevant vector space. A query like "Who has experience with distributed systems?" would search the "Skills" vectors, while "Find me a good project leader" would search the "Role" vectors.

## Tying It Together: Graph + Multi-Vector

The complete architecture in \`lattice-agent\` combines these two concepts. Every node in our knowledge graph has a set of associated, named vector embeddings.

The retrieval process becomes a powerful, two-step operation:
1. **Semantic Search:** First, the agent performs a vector search across one or more vector spaces to find a set of potentially relevant nodes. For example, a query "Find a manager who knows Go for a project like Thunder" would search both the "Role" and "Skills" vector spaces.
2. **Graph Traversal:** The nodes retrieved from the vector search become starting points for a graph traversal. The agent can then explore the connections of these initial nodes to find more context, validate relationships, and construct a comprehensive, accurate answer.

This hybrid model allows an agent to reason about the world in a way that mirrors human cognition—combining the fuzzy, associative power of semantic search with the logical, structured reasoning of relationship traversal. It's a more complex architecture, but one we believe is essential for building the next generation of truly intelligent systems.`,
    }
]

export const NAV_ITEMS: NavItem[] = [
    { href: '#/projects', label: 'Projects' },
    { href: '#/about', label: 'About' },
    { href: '#/contact', label: 'Contact' },
]

