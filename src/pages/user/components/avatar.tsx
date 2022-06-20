import { useRef } from 'react';
import type { ChangeEvent } from 'react';
import { Avatar as AvatarMui, Box, Button, styled } from '@mui/material';
import { Upload as UploadIcon } from '@mui/icons-material';
import { useChangeAvatarUserMutation, useGetUserQuery } from 'services/user';

const UploadButton = styled(Button)`
  position: absolute;
  bottom: -8px;
  right: -8px;
  padding: 8px;
  min-width: 0;
  border-radius: 24px;
`;

export const Avatar = () => {
  const ref = useRef<HTMLInputElement>(null);
  const { data: { avatar } = {} } = useGetUserQuery();
  const [changeAvatar] = useChangeAvatarUserMutation();

  const onClick = () => {
    ref.current?.click();
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target?.files && event.target?.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('avatar', file);
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      changeAvatar(formData);
    }
  };

  return (
    <Box display="flex" justifyContent="center" mb={1}>
      <Box position="relative">
        <AvatarMui src={avatar} sx={{ width: 100, height: 100 }} />

        <UploadButton color="primary" variant="contained" onClick={onClick}>
          <UploadIcon />
        </UploadButton>
        <input ref={ref} type="file" accept="image/png, image/jpeg" hidden onChange={onChange} />
      </Box>
    </Box>
  );
};
