import type { rootReducer } from './root-reducer';

declare global {
  type GlobalStore = ReturnType<typeof rootReducer>;
}
