import { createSelector } from '@reduxjs/toolkit';
import { lightTheme } from 'server/models/theme-data';
import type { TSiteTheme } from 'server/models/types';

export type ThemeState = {
  userTheme?: string;
  themeData?: TSiteTheme;
};

const actions = {
  SET_USER_THEME: 'SET_USER_THEME',
  SET_USER_THEME_DATA: 'SET_USER_THEME_DATA',
};

interface BaseActionType<T> {
  type: T;
}

interface ItemActionType extends BaseActionType<keyof typeof actions> {
  userTheme?: string;
  themeData?: TSiteTheme;
}

const initialState: ThemeState = {
  userTheme: 'light',
  themeData: lightTheme,
};

export const themeReducer = (
  state: ThemeState = initialState,
  action: ItemActionType | null = null,
) => {
  switch (action?.type) {
    case actions.SET_USER_THEME:
      return { ...state, userTheme: action.userTheme };
    case actions.SET_USER_THEME_DATA:
      return { ...state, themeData: action.themeData };
    default:
      return state;
  }
};

export function setUserTheme(themeData: TSiteTheme): ItemActionType {
  return { type: actions.SET_USER_THEME_DATA as keyof typeof actions, themeData };
}

export function setUserThemeName(userTheme: string): ItemActionType {
  return { type: actions.SET_USER_THEME as keyof typeof actions, userTheme };
}

export const themeInfoSelector = createSelector(
  (state: { theme: ThemeState }) => state,
  (items) => items.theme,
);
