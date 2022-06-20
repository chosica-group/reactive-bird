import { Form, TFormInputs } from 'components/form';
import type { TUpdateUserProfileRequest } from 'services/user';
import { useGetUserQuery, useUpdateUserProfileMutation } from 'services/user';
import { getTextError } from 'utils/get-error-text';

const inputs: TFormInputs<TUpdateUserProfileRequest> = [
  { name: 'first_name', label: 'Имя', type: 'text', mask: true },
  { name: 'second_name', label: 'Фамилия', type: 'text', mask: true },
  { name: 'display_name', label: 'Отображаемое имя', type: 'text', mask: true },
  { name: 'login', label: 'Логин', type: 'text', mask: true },
  { name: 'email', label: 'Почта', type: 'email', mask: true },
  { name: 'phone', label: 'Телефон', type: 'text', mask: true },
];

export const Profile = () => {
  const { data: { avatar, id, ...data } = {}, isSuccess } = useGetUserQuery();
  const [updateProfile, { isLoading, isError, error }] = useUpdateUserProfileMutation();

  return isSuccess ? (
    <Form<TUpdateUserProfileRequest>
      data={data as TUpdateUserProfileRequest}
      inputs={inputs}
      onSubmit={updateProfile}
      submitText="Редактировать"
      isLoading={isLoading}
      error={isError ? getTextError(error) : undefined}
    />
  ) : null;
};
