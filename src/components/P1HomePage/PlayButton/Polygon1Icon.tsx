import { memo, SVGProps } from 'react';

const Polygon1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 29 29' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M25.5148 12.5254C26.8482 13.2952 26.8482 15.2197 25.5149 15.9895L10.1287 24.8727C8.79538 25.6425 7.12871 24.6802 7.12871 23.1406L7.12871 5.37424C7.12871 3.83464 8.79538 2.87238 10.1287 3.64218L25.5148 12.5254Z'
      fill='black'
    />
  </svg>
);
const Memo = memo(Polygon1Icon);
export { Memo as Polygon1Icon };
