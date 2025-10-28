
export interface Project {
  name: string;
  displayName?: string;
  description: string;
  repoUrl: string;
  docsUrl?: string;
  websiteUrl?: string;
  tags: string[];
  isFeatured?: boolean;
  quickstart?: string;
  content: {
    problem: string;
    solution: string;
    features: string[];
  };
}

export interface NavItem {
    href: string;
    label: string;
}
