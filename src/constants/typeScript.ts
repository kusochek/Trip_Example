// let a: boolean = true;
// a = 'ddd';

// const id: number | string | null = null;

// type SomeType = number | string;

// const a: SomeType = '10';

export enum EContinents {
    EUROPE = 'europe',
    ASIA = 'asia',
    NORTH_AMERICA = 'north america',
}

type SomeObjectType = {
    continent: EContinents,
    createdAt: Date,
    country: string,
    imageSrc: string,
    price: number,
    description: string,
    city: string,
    id: number | string,
    fn: () => void,
}

const trip: SomeObjectType = {
    continent: EContinents.ASIA,
    createdAt: new Date(),
    country: '',
    imageSrc: '',
    price: 0,
    description: '',
    city: '',
    id: '',
    fn() { 10 + 9 },
}

interface IContinents {
    continentName: EContinents,
    description: '',
}

interface ICountries extends IContinents {
    country: string,
}

