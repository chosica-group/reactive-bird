import { compose } from '@reduxjs/toolkit';
import type { FunctionComponent } from 'react';

import { withTheme } from './with-theme';
import { withRouter } from './with-router/with-router';

export const withProviders = compose<FunctionComponent>(withTheme, withRouter);
