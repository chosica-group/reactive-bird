export type TComment = {
  id?: number;
  comment: string;
};

export type TUserTheme = {
  id?: number;
  user_id: number;
  theme_name: string;
};

export type TSiteTheme = {
  id?: number;
  theme_name: string;
  theme_id: number;
  theme_background_color: string;
  theme_text_color: string;
};
