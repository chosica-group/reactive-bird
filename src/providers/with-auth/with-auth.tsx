import type { ComponentType } from 'react';
import { AuthProvider } from 'providers/with-auth/auth';

export const withAuth = (Component: ComponentType) => () =>
  (
    <AuthProvider>
      <Component />
    </AuthProvider>
  );
