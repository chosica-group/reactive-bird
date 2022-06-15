import type { SignupParams } from 'services/auth.service';

export type SignFormValue = SignupParams & { passwordRepeat: string };
