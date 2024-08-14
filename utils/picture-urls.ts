const EXTERNAL_BASE_IMAGE_URL = 'https://starwars-visualguide.com/assets/img';

export const getFilmPicture = (id: number | string): string => {
  return `${EXTERNAL_BASE_IMAGE_URL}/films/${id}.jpg`
}

export const getPeoplePicture = (id: number | string): string => {
  return `${EXTERNAL_BASE_IMAGE_URL}/characters/${id}.jpg`
}

export const getStarshipPicture = (id: number | string): string => {
  return `${EXTERNAL_BASE_IMAGE_URL}/starships/${id}.jpg`
}

export const getPlanetPicture = (id: number | string): string => {
  return `${EXTERNAL_BASE_IMAGE_URL}/planets/${id}.jpg`
}

export const getVehiclePicture = (id: number | string): string => {
  return `${EXTERNAL_BASE_IMAGE_URL}/vehicles/${id}.jpg`
}

export const getSpeciesPicture = (id: number | string): string => {
  return `${EXTERNAL_BASE_IMAGE_URL}/species/${id}.jpg`
}