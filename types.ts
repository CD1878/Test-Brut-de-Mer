export interface NavItem {
  label: string;
  path: string;
}

export interface MenuCategory {
  title: string;
  items: MenuItem[];
}

export interface MenuItem {
  name: string;
  price?: string;
  description?: string;
}

export enum Language {
  NL = 'NL',
  EN = 'EN'
}