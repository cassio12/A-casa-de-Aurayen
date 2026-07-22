export interface HallEnvironment {
  id: string;
  label: string;
  epithet: string;
  href: string;
  position: 'north' | 'west' | 'east' | 'south';
  available: boolean;
}

export const hallEnvironments: HallEnvironment[] = [
  {
    id: 'biblioteca',
    label: 'Biblioteca',
    epithet: 'Contos e pergaminhos',
    href: '/biblioteca/',
    position: 'west',
    available: true,
  },
  {
    id: 'arquivos',
    label: 'Arquivos',
    epithet: 'Mapas e relíquias',
    href: '/biblioteca/#arquivos',
    position: 'east',
    available: false,
  },
  {
    id: 'observatorio',
    label: 'Observatório',
    epithet: 'Constelações e origem',
    href: '#',
    position: 'north',
    available: false,
  },
  {
    id: 'guardioes',
    label: 'Salão dos Guardiões',
    epithet: 'Vozes e destinos',
    href: '#',
    position: 'south',
    available: false,
  },
];

export const positionClasses: Record<HallEnvironment['position'], string> = {
  north: 'hall-portal--north',
  west: 'hall-portal--west',
  east: 'hall-portal--east',
  south: 'hall-portal--south',
};
