// Facts shared by every language. The copy itself lives in src/i18n/.

export const site = {
  name: 'Technogix',
  legalName: 'Technogix SARL',
  url: 'https://technogix.dev',
  person: 'Nadège Lemperiere',
  email: 'contact@technogix.dev',
  linkedin: 'https://www.linkedin.com/in/nadege-lemperiere-88518129/',
  github: 'https://github.com/nadegelemperiere',
  infraRepo: 'https://github.com/technogix/infrastructure',
  awsModules: 'https://github.com/nadegelemperiere-aws',
  // Google Calendar appointment page. Empty: the booking button is not shown.
  booking: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ3U_lZ1O270VGeleGhYCEMf0NOoYc5vlRNZ0eLF3T0tX8Pmh55DiMeh3jZA41NhCX8Z2YE0LcLp',
  location: 'Issy-les-Moulineaux',
};

// Marker for facts not known yet. `RELEASE=1 bun test` fails while one is left.
export const TODO = '[TODO]';

// Company registration (Kbis).
export const company = {
  capital: '5 000 €',
  address: '3 impasse Wagner, 92130 Issy-les-Moulineaux, France',
  rcs: 'Nanterre 913 807 855',
  siren: '913 807 855',
  vat: 'FR71913807855',
  // GitHub Pages (repository technogix/website); the domain and DNS stay at OVHcloud.
  host: 'GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, United States',
};
