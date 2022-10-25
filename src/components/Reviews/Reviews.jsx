import { getReview } from 'services/MovieAPI/API';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { ReviewItem } from './ReviewItem';
import css from './Reviews.module.css';

export const Reviews = () => {
  const [review, setReview] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    try {
      get();
    } catch (error) {}

    async function get() {
      const { results } = await getReview(movieId);
      setReview([...results]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className={css.container}>
      <ul className={css.list}>
        {review.length > 0 ? (
          review.map(item => <ReviewItem key={item.id} review={item} />)
        ) : (
          <h2>There are no reviews for this film yet. :(</h2>
        )}
      </ul>
    </div>
  );
};
