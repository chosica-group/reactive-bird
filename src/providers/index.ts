import { compose } from '@reduxjs/toolkit';
import type { FunctionComponent } from 'react';

import { withTheme } from './with-theme';

export const withProviders = compose<FunctionComponent>(withTheme);
