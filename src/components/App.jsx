import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import MoviePage from 'pages/Movies';
import Header from 'components/Header';
import MovieDetails from 'pages/MovieDetails';
import { Cast } from 'components/Cast';
import { Reviews } from 'components/Reviews';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<MoviePage />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<div>404</div>} />
      </Route>
    </Routes>
  );
};
