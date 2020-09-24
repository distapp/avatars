type Props = {
  color: string;
};

export default ({ color }: Props) => `
  <path d="M260.366 90.863h-272.91l.104-.212C-7.895 81.395.49 64.319 11.403 49.04c6.193-8.67 13.127-16.654 20.539-22.27 7.412-5.615 15.12-8.73 22.95-8.045 15.054 1.317 28.463 9.56 41.925 17.834 1.275.784 2.551 1.569 3.829 2.348 14.485 8.827 29.359 17.023 45.719 13.436 5.534-1.213 9.264-3.81 11.611-7.164 2.314-3.307 3.146-7.15 3.29-10.663.144-3.518-.395-6.843-.955-9.26a39.89 39.89 0 00-.747-2.773c3.625-3.649 7.463-5.774 11.425-6.73 4.295-1.038 8.887-.738 13.718.69 9.73 2.879 20.14 10.253 30.3 19.735 18.614 17.373 35.693 41.144 45.359 54.684z" fill="${color}" stroke="#000" stroke-width="4.274"/>
`;
