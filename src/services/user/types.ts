type TUser = {
  id: number;
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
  avatar: string;
};

export type TReject = {
  reason: string;
};

export type TUserResponse = TUser;

export type TUpdateUserProfileRequest = Omit<TUser, 'avatar' | 'id'>;

export type TChangeAvatarUserRequest = FormData;

export type TChangePasswordUserRequest = {
  oldPassword: string;
  newPassword: string;
};
