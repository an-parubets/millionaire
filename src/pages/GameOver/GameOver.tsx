import React, { ReactElement, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { SplitScreenLayout } from '../../layout';
import { ButtonPrimary } from '../../components/Button';
import Amount from '../../components/Amount';
import Typography, { Variant } from '../../components/Typography';
import { useStoreSelector } from '../../store';
import { prizeSelector } from '../../store/slices/app/quiz';
import { ROUTE } from '../../router/config';
import styles from './GameOver.module.css';

function GameOver(): ReactElement {
  const navigate = useNavigate();
  const prize = useStoreSelector(prizeSelector);

  // We can use navigate via Link form react-router-dom instead programmatically navigation
  // eslint-disable-next-line max-len
  // We're currently using programmatic navigation so we don't have to create a link component that looks like a button
  const startGameAgain = useCallback(() => {
    navigate(ROUTE.QUIZ);
  }, [navigate]);

  return (
    <SplitScreenLayout
      description={
        prize ? (
          <div className={styles.result}>
            <Typography variant={Variant.bodyBold} className={styles.score}>
              Total score:
            </Typography>
            <Typography variant={Variant.title} className={styles.title}>
              <Amount amount={prize.amount} currency={prize.currency} />
              {' '}
              earned
            </Typography>
          </div>
        ) : (
          <Typography variant={Variant.title} className={styles.title}>
            Will be lucky next time
          </Typography>
        )
      }
      button={<ButtonPrimary onClick={startGameAgain}>Try again</ButtonPrimary>}
      className={styles.layout}
    />
  );
}

export default GameOver;
