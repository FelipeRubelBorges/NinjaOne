import { faker } from "@faker-js/faker";

export function generateStrongPassword() {
  const uppercaseLetter = faker.string.alpha({ count: 1, casing: 'upper' });
  const number = faker.string.numeric(1);
  const specialChars = '!@#&%*';
  const specialChar = specialChars.charAt(Math.floor(Math.random() * specialChars.length));
    const lowercaseLetter = faker.string.alpha({ count: 2, casing: 'lower' });
    let password = uppercaseLetter + number + specialChar + lowercaseLetter;
  while (password.length < 8) {
    password += faker.string.alpha({ count: 1, casing: 'lower' });
  }
  return faker.helpers.shuffle(password.split('')).join('');
}