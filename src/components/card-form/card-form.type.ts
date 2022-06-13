import type { ReactElement } from 'react';

export type CardInput = {
  type: string;
  name: string;
  label: string;
};

export type CardFormProps = {
  children: ReactElement;
};
