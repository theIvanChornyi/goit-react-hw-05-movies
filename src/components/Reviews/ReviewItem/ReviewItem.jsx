import PropTypes from 'prop-types';
import { AiOutlineLink } from 'react-icons/ai';
import css from './ReviewItem.module.css';
import DefUser from 'img/defaultUser.jpg';
import { MATCH_WORD } from 'services/config/matchWords';
import { normalizeAvatar } from 'services/helpers/avatarAdressNormalize';

export const ReviewItem = ({ review }) => {
  const { author, author_details, content, created_at, url } = review;
  const { avatar_path, name, rating, username } = author_details;
  return (
    <li className={css.item}>
      <article className={css.unit}>
        <div className={css.userCard}>
          <div className={css.thumb}>
            <img
              width={'75px'}
              src={
                avatar_path ? normalizeAvatar(avatar_path, MATCH_WORD) : DefUser
              }
              alt={author}
            />
          </div>
          <div className={css.userData}>
            <p className={css.userText}>@{username}</p>
            <p className={css.userText}>{name}</p>
            <p className={css.rating}>{rating}</p>
          </div>
          <p className={css.data}> {new Date(created_at).toLocaleString()}</p>
        </div>
        <div className={css.reviewContent}>
          <p>{content}</p>
        </div>
        <a
          className={css.link}
          href={url}
          rel="noreferrer nofollow noopener"
          target='"_blank"'
        >
          Original
          {<AiOutlineLink className={css.icon} />}
        </a>
      </article>
    </li>
  );
};

ReviewItem.propTypes = {
  review: PropTypes.shape({
    author: PropTypes.string,
    author_details: PropTypes.shape({
      avatar_path: PropTypes.string,
      name: PropTypes.string,
      rating: PropTypes.number,
      username: PropTypes.string,
    }),
    content: PropTypes.string,
    created_at: PropTypes.string,
    url: PropTypes.string,
  }),
};
