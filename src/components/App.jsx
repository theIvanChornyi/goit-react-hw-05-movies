import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from 'components/Header';

import Cast from 'components/Cast';
import Reviews from 'components/Reviews';
import { Spiner } from 'components/Spiner';

const Home = lazy(() => import('pages/Home'));
const MoviePage = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));

export const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Spiner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movies" element={<MoviePage />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </>
  );
};
