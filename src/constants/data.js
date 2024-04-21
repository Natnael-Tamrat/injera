import images from './images';

const foods = [
  {
    title: 'Gored Gored',
    price: '€17',
    tags: 'Bocconcini di manzo appena saltati aromatizzati, scottati con il nostro burro e berberè',
  },
  {
    title: 'Kitfo (Tartare di manzo)',
    price: '€17',
    tags: 'Carne trita speziata e cotta con il nostro burro (anchenella variante originale cruda/semicruda)',
  },
  {
    title: 'Tibs (Spriss)',
    price: '€16',
    tags: 'Carne di manzo a dadini saltata con cipolla, con salsapiccante, mediamente piccante, non piccante',
  },
  {
    title: 'Zighini Vegetariano/vegano',
    price: '€15',
    tags: 'Con cinque tipi di legumi e verdure (possono esserepresi tutti o anche solo alcuni in base al gusto personale):',
  },
  {
    title: 'Zighini di carne',
    price: '€16',
    tags: 'Spezzatino di manzo, pollo o agnello. Volendo avete lpossibilità di gustare 3 tipi di carne in un unico piatto e di escluderne una a secondo del vostro gradimento. ',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '€20',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '€16',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '€10',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '€31',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '€26',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { foods, cocktails, awards };
