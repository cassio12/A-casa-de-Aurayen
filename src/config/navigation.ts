export interface NavItem {
  label: string;
  href: string;
}

export const mainNavigation: NavItem[] = [
  { label: 'Início', href: '/' },
  { label: 'Crônicas', href: '/cronicas/' },
  { label: 'Biblioteca', href: '/biblioteca/' },
];

export interface ContentCategory {
  id: string;
  label: string;
  description: string;
  href: string;
}

export const contentCategories: ContentCategory[] = [
  {
    id: 'cronicas',
    label: 'Crônicas',
    description: 'Relatos da jornada e do universo de Aurayen.',
    href: '/cronicas/',
  },
  {
    id: 'personagens',
    label: 'Personagens',
    description: 'Vidas, destinos e vozes que habitam o mundo.',
    href: '/biblioteca/#personagens',
  },
  {
    id: 'racas',
    label: 'Raças',
    description: 'Povos, linhagens e heranças do universo.',
    href: '/biblioteca/#racas',
  },
  {
    id: 'faccoes',
    label: 'Facções',
    description: 'Alianças, conflitos e forças em movimento.',
    href: '/biblioteca/#faccoes',
  },
  {
    id: 'mapas',
    label: 'Mapas',
    description: 'Territórios, rotas e fronteiras do mundo.',
    href: '/biblioteca/#mapas',
  },
  {
    id: 'eventos',
    label: 'Eventos',
    description: 'Marcos históricos que moldaram Aurayen.',
    href: '/biblioteca/#eventos',
  },
];
