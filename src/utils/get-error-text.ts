/* eslint @typescript-eslint/no-unsafe-member-access: 0 */
/* eslint @typescript-eslint/no-explicit-any: 0 */
const isErrorReason = (error: unknown): error is { reason: string } =>
  typeof error === 'object' &&
  error != null &&
  'reason' in error &&
  typeof (error as any).reason === 'string';

const isDataErrorReason = (error: unknown): error is { data: { reason: string } } =>
  typeof error === 'object' &&
  error != null &&
  'data' in error &&
  typeof (error as any).data === 'object' &&
  isErrorReason((error as { data: object }).data);

export const getTextError = (error: unknown) => {
  if (isDataErrorReason(error)) {
    return error.data.reason;
  }
  if (isErrorReason(error)) {
    return error.reason;
  }
  return 'Ошибка! Попробйте позже';
};
