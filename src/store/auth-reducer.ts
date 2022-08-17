import { createSelector } from '@reduxjs/toolkit';

export type AuthState = {
  status: string;
  isLoggedIn: boolean;
  userId?: number;
};

const actions = {
  SET_USER_LOGGEDIN: 'SET_USER_LOGGEDIN',
  SET_USER_ID: 'SET_USER_ID',
};

interface BaseActionType<T> {
  type: T;
}

interface ItemActionType extends BaseActionType<keyof typeof actions> {
  isLoggedIn?: boolean;
  userId?: number;
}

const initialState: AuthState = {
  isLoggedIn: false,
  status: '',
  userId: 1,
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

export const userInfoSelector = createSelector(
  (state: { auth: AuthState }) => state,
  (items) => items.auth,
);
