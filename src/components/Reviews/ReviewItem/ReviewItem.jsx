import { AiOutlineLink } from 'react-icons/ai';
import css from './ReviewItem.module.css';
import DefUser from 'img/defaultUser.jpg';
import { normalizeAvatar } from 'services/helpers/avatarAdressNormalize';

const MATCH_WORD = 'https://';

export const ReviewItem = ({ review }) => {
  const { author, author_details, content, created_at, url } = review;
  const { avatar_path, name, rating, username } = author_details;
  return (
    <li className={css.item}>
      <article className={css.unit}>
        <div className={css.userCard}>
          <div className={css.thumb}>
            <img
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
