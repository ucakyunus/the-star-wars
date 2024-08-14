export interface INavItem {
  title: string;
  href: string;
}

export const navs = Object.freeze({
  films: {
    title: 'Films',
    href: '/films'
  },
  people: {
    title: 'People',
    href: '/people'
  },
  starships: {
    title: 'Starships',
    href: '/starships'
  },
  planets: {
    title: 'Planets',
    href: '/planets'
  },
  vehicles: {
    title: 'Vehicles',
    href: '/vehicles'
  },
  species: {
    title: 'Species',
    href: '/species'
  }
});