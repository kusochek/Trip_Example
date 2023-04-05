import { numbers } from './regexp';

export const rulesText = {
  required: (field) => `${field} is required.`,
  minLength: (length) => `At least ${length} characters.`,
  maxLength: (length) => `Less than ${length} characters.`,
  number: 'Field must contain only numbers.',
  price: (price) => `Minimal price is ${price}`,
};

const numeric = {
  value: numbers,
  message: rulesText.number,
};

export const tripRules = {
  continent: {
    required: { value: true, message: rulesText.required('Continent') },
    minLength: { value: 3, message: rulesText.minLength(3) },
    maxLength: { value: 16, message: rulesText.maxLength(16) },
  },
  country: {
    required: { value: true, message: rulesText.required('Country') },
    minLength: { value: 3, message: rulesText.minLength(3) },
    maxLength: { value: 16, message: rulesText.maxLength(16) },
  },
  city: {
    required: { value: true, message: rulesText.required('City') },
    minLength: { value: 3, message: rulesText.minLength(3) },
    maxLength: { value: 16, message: rulesText.maxLength(16) },
  },
  price: (price) => ({
    required: { value: true, message: rulesText.required('Price') },
    pattern: numeric,
    min: {
      value: price,
      message: rulesText.price(price),
    },
  }),
  photo: {
    required: { value: true, message: rulesText.required('Photo') },
  },
  description: {
    required: { value: true, message: rulesText.required('Description') },
    minLength: { value: 100, message: rulesText.minLength(100) },
    maxLength: { value: 1000, message: rulesText.maxLength(1000) },
  },
};
