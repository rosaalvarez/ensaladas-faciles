export interface Country {
  code: string;
  name: string;
  flag: string;
}

export const countries: Country[] = [
  { code: 'CO', name: 'Colombia', flag: '🇨🇴' },
  { code: 'MX', name: 'México', flag: '🇲🇽' },
  { code: 'AR', name: 'Argentina', flag: '🇦🇷' },
  { code: 'CL', name: 'Chile', flag: '🇨🇱' },
  { code: 'PE', name: 'Perú', flag: '🇵🇪' },
  { code: 'EC', name: 'Ecuador', flag: '🇪🇨' },
  { code: 'UY', name: 'Uruguay', flag: '🇺🇾' },
  { code: 'VE', name: 'Venezuela', flag: '🇻🇪' },
  { code: 'BO', name: 'Bolivia', flag: '🇧🇴' },
  { code: 'PA', name: 'Panamá', flag: '🇵🇦' },
  { code: 'CR', name: 'Costa Rica', flag: '🇨🇷' },
  { code: 'DO', name: 'Rep. Dominicana', flag: '🇩🇴' },
];

export function getCountryByCode(code: string): Country | undefined {
  return countries.find(c => c.code === code);
}
