export interface Project {
  id: string;
  name: string;
  slug: string;
  description: string;
  url: string;
  tags: string[];
  category: 'e-commerce' | 'corporate' | 'non-profit' | 'medical' | 'other';
  imageUrl: string; // In a real build, this would be the path to the generated screenshot
}

export interface NavItem {
  label: string;
  href: string;
}