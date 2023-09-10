import React, { ReactElement, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { SplitScreenLayout } from '../../layout';
import { ButtonPrimary } from '../../components/Button';
import Typography, { Variant } from '../../components/Typography';
import { useStoreDispatch } from '../../store';
import { setIsActive } from '../../store/slices/app/quiz';
import { ROUTE } from '../../router/config';
import styles from './Lobby.module.css';

function Lobby(): ReactElement {
  const dispatch = useStoreDispatch();
  const navigate = useNavigate();

  // We can use navigate via Link form react-router-dom instead programmatically navigation
  // eslint-disable-next-line max-len
  // We're currently using programmatic navigation so we don't have to create a link component that looks like a button
  const startGame = useCallback(() => {
    dispatch(setIsActive(true));
    navigate(ROUTE.QUIZ);
  }, [dispatch, navigate]);

  return (
    <SplitScreenLayout
      description={(
        <Typography variant={Variant.title}>
          Who wants to be a millionaire?
        </Typography>
      )}
      button={<ButtonPrimary onClick={startGame}>Start</ButtonPrimary>}
      className={styles.layout}
    />
  );
}

export default Lobby;
