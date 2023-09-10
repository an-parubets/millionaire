import React, { ReactElement, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { SplitScreenLayout } from '../../layout';
import { ButtonPrimary } from '../../components/Button';
import Typography, { Variant } from '../../components/Typography';
import { ROUTE } from '../../router/config';
import styles from './Error.module.css';

interface Props {
  errorCode: 404 | 500;
}

function Error({ errorCode }: Props): ReactElement {
  const navigate = useNavigate();

  const goLobby = useCallback(() => {
    navigate(ROUTE.LOBBY);
  }, [navigate]);

  return (
    <SplitScreenLayout
      description={(
        <div className={styles.description}>
          <Typography variant={Variant.title} className={styles.status}>
            {errorCode}
          </Typography>
          <Typography variant={Variant.subtitle}>
            Oops, you hacked our site
          </Typography>
        </div>
      )}
      button={<ButtonPrimary onClick={goLobby}>Go lobby</ButtonPrimary>}
    />
  );
}

export default Error;
