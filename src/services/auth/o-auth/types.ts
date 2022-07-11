export type TClientId = {
  service_id: string;
};

export type TAuthWithYandex = {
  code: string;
  redirect_uri: string;
};

export type TErrorResponse = {
  reason: string;
};
