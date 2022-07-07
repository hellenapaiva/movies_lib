import { useState, useEffect } from "react";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setTopMovies(data.results);
  };

  useEffect(() => {
    const topRatedURL = `${moviesURL}top_rated?${apiKey}`;
    getTopRatedMovies(topRatedURL);
  }, []);

  return (
    <div>{topMovies && topMovies.map((movie) => <p>{movie.title}</p>)}</div>
  );
};

export default Home;
