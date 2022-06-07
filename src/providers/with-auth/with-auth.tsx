import { getUserInfo } from 'services/auth.service';

export const withAuth = async () => {
  try {
    await getUserInfo();
    return true;
  } catch (e) {
    return false;
  }
};
