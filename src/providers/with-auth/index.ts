import { useContext } from 'react';
import { AuthContext } from './auth';

export default function useAuth() {
  return useContext(AuthContext);
}
