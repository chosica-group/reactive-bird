import { createSelector } from '@reduxjs/toolkit';

export type AuthState = {
  status: string;
  isLoggedIn: boolean;
  userId?: number;
  userTheme?: string;
};

const actions = {
  SET_USER_LOGGEDIN: 'SET_USER_LOGGEDIN',
  SET_USER_ID: 'SET_USER_ID',
  SET_USER_THEME: 'SET_USER_THEME',
};

interface BaseActionType<T> {
  type: T;
}

interface ItemActionType extends BaseActionType<keyof typeof actions> {
  isLoggedIn?: boolean;
  userId?: number;
  userTheme?: string;
}

const initialState: AuthState = {
  isLoggedIn: false,
  status: '',
  userId: 1,
  userTheme: 'light',
};

export const authReducer = (
  state: AuthState = initialState,
  action: ItemActionType | null = null,
) => {
  switch (action?.type) {
    case actions.SET_USER_LOGGEDIN:
      return { ...state, isLoggedIn: action.isLoggedIn };
    case actions.SET_USER_ID:
      return { ...state, userId: action.userId };
    case actions.SET_USER_THEME:
      return { ...state, userTheme: action.userTheme };
    default:
      return state;
  }
};

export function setUserLoggedIn(isLoggedIn: boolean): ItemActionType {
  return { type: actions.SET_USER_LOGGEDIN as keyof typeof actions, isLoggedIn };
}

export function setUserId(userId: number): ItemActionType {
  return { type: actions.SET_USER_ID as keyof typeof actions, userId };
}

export function setUserTheme(userTheme: string): ItemActionType {
  return { type: actions.SET_USER_LOGGEDIN as keyof typeof actions, userTheme };
}

export const isLoggedInIfoSelector = createSelector(
  (state: { auth: AuthState }) => state,
  (items) => items.auth,
);
