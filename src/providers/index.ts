import { compose } from '@reduxjs/toolkit';
import type { FunctionComponent } from 'react';

import { withTheme } from './with-theme';
import { withRedux } from './with-redux';

export const withProviders = compose<FunctionComponent>(withTheme, withRedux);
