import React, { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { BaseLayout } from '../../layout';
import Loader from '../../components/Loader';
import Typography, { Variant } from '../../components/Typography';
import Rounds from './components/Rounds';
import Answers from './components/Answers';
import ModalRounds from './components/ModalRounds';
import { useIsMobileLayout } from '../../hooks/useMediaQuery';
import { useGetQuestionsQuery } from '../../store/slices/domain';
import { useQuizManager } from './hooks/useQuizManager';
import { ROUTE } from '../../router/config';
import styles from './Quiz.module.css';

function Quiz(): ReactElement {
  const isMobile = useIsMobileLayout();
  const { isLoading, isError } = useGetQuestionsQuery(null);

  const {
    currentQuestion, rounds, answers, selectAnswer,
  } = useQuizManager();

  if (isLoading || !currentQuestion) return <Loader className={styles.loader} />;
  if (isError) return <Navigate to={ROUTE.SERVER_ERROR} />;

  return (
    <BaseLayout className={styles.layout}>
      <section className={styles.component}>
        {isMobile && <ModalRounds rounds={rounds} />}

        <Typography variant={Variant.subtitle} className={styles.title}>
          {currentQuestion.title}
        </Typography>

        <Answers
          answers={answers}
          selectAnswer={selectAnswer}
          className={styles.answers}
        />
      </section>

      {!isMobile && (
        <aside className={styles.aside}>
          <Rounds rounds={rounds} />
        </aside>
      )}
    </BaseLayout>
  );
}

export default Quiz;
