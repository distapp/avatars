import type { IPrng } from '../../../../interfaces';
import { array } from '../../../../utils';

import beard from './beard';
import scruff from './scruff';

export const aliases = {
  beard,
  scruff,
};

type Props = {
  prng: IPrng;
  values: string[];
  color: string;
};

export const create = ({ values, prng, color }: Props) =>
  prng.pick(
    array.alias({
      values,
      aliases,
    })
  )({ color });
