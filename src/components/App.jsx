import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home/Home';
import Header from 'components/Header';
import MovieDetails from 'pages/MovieDetails';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<div>movies</div>} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<div>Hello</div>} />
            <Route path="reviews" element={<div>Hello</div>} />
          </Route>
          <Route path="*" element={<div>404</div>} />
        </Route>
      </Routes>
    </div>
  );
};
