import { getReview } from 'services/MovieAPI/API';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import css from './Reviews.module.css';
import { STATE } from 'services/config/page.state';
import { useStateMachine } from 'services/hooks/stateMachine';

import { Spiner } from 'components/Spiner';
import { ErrorMesage } from 'components/ErrorMesage';
import { ReviewItem } from './ReviewItem';

export const Reviews = () => {
  const [review, setReview] = useState([]);
  const { movieId } = useParams();
  const { isResolved, isLoad, isRejected, setStateMachine } = useStateMachine(
    STATE.IDLE
  );

  useEffect(() => {
    setStateMachine(STATE.LOAD);
    get();

    async function get() {
      try {
        const { results } = await getReview(movieId);
        setReview([...results]);
        setStateMachine(STATE.RESOLVE);
      } catch (error) {
        setStateMachine(STATE.ERROR);
        console.log(error.message);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const isEmpty = review.length < 1;

  return (
    <div className={css.container}>
      {isLoad && <Spiner />}
      {isRejected && <ErrorMesage />}
      {isEmpty && (
        <h2 className={css.messageEmpty}>
          There are no reviews for this film yet. :(
        </h2>
      )}
      {isResolved && !isEmpty && (
        <ul className={css.list}>
          {review.map(item => (
            <ReviewItem key={item.id} review={item} />
          ))}
        </ul>
      )}
    </div>
  );
};
