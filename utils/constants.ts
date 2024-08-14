const FILM_PHOTO_URL = 'https://starwars-visualguide.com/assets/img/films';

const PEOPLE_PHOTO_URL = 'https://starwars-visualguide.com/assets/img/characters';

const STARSHIPS_PHOTO_URL = 'https://starwars-visualguide.com/assets/img/starships';

const PLANETS_PHOTO_URL = 'https://starwars-visualguide.com/assets/img/planets';

const VEHICLES_PHOTO_URL = 'https://starwars-visualguide.com/assets/img/vehicles';

const SPECIES_PHOTO_URL = 'https://starwars-visualguide.com/assets/img/species';

export interface INavItem {
  title: string;
  href: string;
}

export const navs = {
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
}

export const getFilmCover = (id: number | string): string => {
  return `${FILM_PHOTO_URL}/${id}.jpg`
}

export const getPeoplePicture = (id: number | string): string => {
  return `${PEOPLE_PHOTO_URL}/${id}.jpg`
}

export const getStarshipPicture = (id: number | string): string => {
  return `${STARSHIPS_PHOTO_URL}/${id}.jpg`
}

export const getPlanetPicture = (id: number | string): string => {
  return `${PLANETS_PHOTO_URL}/${id}.jpg`
}

export const getVehiclePicture = (id: number | string): string => {
  return `${VEHICLES_PHOTO_URL}/${id}.jpg`
}

export const getSpeciesPicture = (id: number | string): string => {
  return `${SPECIES_PHOTO_URL}/${id}.jpg`
}