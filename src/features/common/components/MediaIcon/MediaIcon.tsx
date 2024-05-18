import { IconButton, Link } from '@mui/material';
import { ReactNode } from 'react';

type MediaIconProps = {
  url: string;
  size?: 'small' | 'medium' | 'large' | undefined;
  children: ReactNode;
};

const MediaIcon = ({ url, size, children }: MediaIconProps) => {
  return (
    <>
      <Link target="_blank" href={url}>
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="label"
          size={size}
        >
          {children}
        </IconButton>
      </Link>
    </>
  );
};

export default MediaIcon;
