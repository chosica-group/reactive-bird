import type { FunctionComponent } from 'react';
import { compose } from '@reduxjs/toolkit';
import { withTheme } from './with-theme';

export const withProviders = compose<FunctionComponent>(withTheme);
