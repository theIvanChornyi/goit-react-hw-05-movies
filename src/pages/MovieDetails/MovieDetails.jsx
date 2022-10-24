import { getMovieDetails } from 'services/MovieAPI/API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    get();

    async function get() {
      const responce = await getMovieDetails(movieId);
      setMovie({ ...responce });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    movie && (
      <article>
        <h2>{movie.title}</h2>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
          alt={movie.title}
        ></img>
      </article>
    )
  );
};

export default MovieDetails;

// adult
// :
// true
// backdrop_path
// :
// "/76sg5ifisDt3SJT261VojXPgjAc.jpg"
// belongs_to_collection
// :
// null
// budget
// :
// 0
// genres
// :
// [{…}]
// homepage
// :
// ""
// id
// :
// 94997
// imdb_id
// :
// "tt0084791"
// original_language
// :
// "en"
// original_title
// :
// "A Thousand and One Erotic Nights"
// overview
// :
// "Distrustful of women, a sultan executes anyone from his harem whom he sleeps with. One of these women is Scheherezade, who aims to regale the sultan with an erotic tale each night in an effort to postpone her fate."
// popularity
// :
// 4.687
// poster_path
// :
// "/phEM3w0IWlWpzua22ndTo6mVU6A.jpg"
// production_companies
// :
// [{…}]
// production_countries
// :
// [{…}]
// release_date
// :
// "1982-01-01"
// revenue
// :
// 0
// runtime
// :
// 87
// spoken_languages
// :
// [{…}]
// status
// :
// "Released"
// tagline
// :
// "The Story Of Scheherazade"
// title
// :
// "A Thousand and One Erotic Nights"
// video
// :
// false
// vote_average
// :
// 5.433
// vote_count
// :
// 15
