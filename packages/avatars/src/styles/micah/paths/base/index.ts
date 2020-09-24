type Props = {
  color: string;
};

export const create = ({ color }: Props) => `
  <path d="M154 319.5c-14.4-20-25.667-58.666-27-78L58.5 212 30 319.5h124z" fill="${color}" stroke="#000" stroke-width="4"/>
  <path d="M130.373 263.688A65.051 65.051 0 01124 264c-30.779 0-56.053-21.572-58.76-49.098L127 241.5c.378 5.48 1.554 13.316 3.373 22.188z" fill="#000"/>
  <path d="M181.939 151.374l.002.009.093.389.144.654c8.851 40.206-16.109 80.258-56.315 89.89-40.205 9.633-80.606-14.759-90.935-54.61l-.19-.733-16.735-69.844-.067-.289C8.512 76.334 33.544 35.757 74.048 26.053c40.504-9.704 81.206 15.123 91.161 55.501l.051.208.02.083.001.005.048.198.047.199.002.004 16.396 68.437.003.009.081.338.081.339z" fill="${color}" stroke="#000" stroke-width="4"/>
`;
