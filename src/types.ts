export type ColorToken = {
  name: string;
  hex: string;
  usage?: string;
  status?: 'verified' | 'unverified';
};

export type TypographyToken = {
  token: string;
  size: number;
  lineHeight: string;
  usage: string;
  font: 'Merriweather' | 'Arial';
  weight: 'Regular' | 'Bold';
};

export type ComponentItem = {
  id: string;
  name: string;
  variants: string;
  states: string;
  slots: string;
};

export type NavItem = {
  id: 'overview' | 'tokens' | 'components' | 'templates' | 'specs';
  label: string;
  icon: any; // Lucide icon
};
