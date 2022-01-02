import { FC } from 'react';

import { Header } from 'components/Header';

import { Container } from '@mui/material';

export const StandardLayout: FC = ({ children }) => (
  <>
    <Header />
    <Container>{children}</Container>
  </>
);
