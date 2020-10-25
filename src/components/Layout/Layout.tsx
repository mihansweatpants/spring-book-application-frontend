import React, { FC } from 'react';

import { Container } from '@material-ui/core';

import { useStyles } from './styles';

const Layout: FC = ({ children }) => {
  const styles = useStyles();

  return (
    <Container maxWidth="lg" className={styles.container}>
      <>
        {children}
      </>
    </Container>
  );
};

export default Layout;
