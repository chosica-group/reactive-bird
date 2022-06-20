import { forwardRef, useEffect, useState } from 'react';
import type { ReactElement, Ref } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Slide } from '@mui/material';
import type { TransitionProps } from '@mui/material/transitions';
import { Form, TFormInputs } from 'components/form';
import type { TChangePasswordUserRequest } from 'services/user';
import { useChangePasswordUserMutation } from 'services/user';
import { getTextError } from 'utils/get-error-text';

const Transition = forwardRef(
  (
    props: TransitionProps & {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      children: ReactElement<any, any>;
    },
    ref: Ref<unknown>,
  ) => <Slide direction="up" ref={ref} {...props} />,
);

type TSubmitWithPassRepeat = TChangePasswordUserRequest & {
  newPasswordRepeat: string;
};

const inputs: TFormInputs<TSubmitWithPassRepeat> = [
  { name: 'oldPassword', label: 'Пароль', type: 'password' },
  { name: 'newPassword', label: 'Пароль', type: 'password', mask: true },
  { name: 'newPasswordRepeat', label: 'Пароль (еще раз)', type: 'password', mask: true },
];

export const Password = () => {
  const [changePassword, { isLoading, isSuccess, isError, error }] =
    useChangePasswordUserMutation();
  const [open, setOpen] = useState(false);
  const [validate, setValidate] = useState<null | string>(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = ({ newPasswordRepeat, ...data }: TSubmitWithPassRepeat) => {
    setValidate(null);
    if (newPasswordRepeat === data.newPassword) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      changePassword(data);
    } else {
      setValidate('Пароль не совпадает');
    }
  };

  useEffect(() => {
    if (isSuccess) {
      handleClickOpen();
    }
  }, [isSuccess]);

  return (
    <>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        maxWidth="xs"
        fullWidth
      >
        <DialogTitle>Изменить текущий пароль</DialogTitle>
        <DialogContent>
          <Form<TSubmitWithPassRepeat>
            inputs={inputs}
            onSubmit={onSubmit}
            submitText="Изменить пароль"
            isLoading={isLoading}
            error={validate || isError ? getTextError(error) : undefined}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="info">
            Отменить
          </Button>
        </DialogActions>
      </Dialog>

      <Button variant="outlined" fullWidth color="secondary" onClick={handleClickOpen}>
        Сменить пароль
      </Button>
    </>
  );
};
