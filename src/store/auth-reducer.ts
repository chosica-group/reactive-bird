import { createSelector } from '@reduxjs/toolkit';

export type AuthState = {
  status: string;
  isLoggedIn: boolean;
};

const actions = {
  SET_USER_AUTH: 'SET_USER_AUTH',
};

interface BaseActionType<T> {
  type: T;
}

interface ItemActionType extends BaseActionType<keyof typeof actions> {
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  isLoggedIn: false,
  status: '',
};

export const authReducer = (
  state: AuthState = initialState,
  action: ItemActionType | null = null,
) => {
  if (action?.type === actions.SET_USER_AUTH) {
    return {
      ...state,
      isLoggedIn: action.isLoggedIn,
    };
  }

  return state;
};

export function setUserLoggedIn(isLoggedIn: boolean): ItemActionType {
  return { type: actions.SET_USER_AUTH as keyof typeof actions, isLoggedIn };
}

export const isLoggedInIfoSelector = createSelector(
  (state: { auth: AuthState }) => state,
  (items) => items.auth,
);
