import { useRef } from 'react';
import type { ChangeEvent } from 'react';
import { Avatar as AvatarMui, Box, Button, styled } from '@mui/material';
import { Upload as UploadIcon } from '@mui/icons-material';

type TProps = {
  avatar: string;
};

const UploadButton = styled(Button)`
  position: absolute;
  bottom: -8px;
  right: -8px;
  padding: 8px;
  min-width: 0;
  border-radius: 24px;
`;

export const Avatar = ({ avatar }: TProps) => {
  const ref = useRef<HTMLInputElement>(null);

  const onClick = () => {
    ref.current?.click();
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    // TODO отправить файл
    // @ts-ignore
    const file = event.target?.files[0];
    console.log(file);
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
