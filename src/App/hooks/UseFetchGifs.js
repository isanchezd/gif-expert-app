import { useState, useEffect } from 'react';
import SearchGifs from '../services/SearchGif';

const UseFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    SearchGifs(category).then((gifs) =>
      setState({ data: gifs, loading: false })
    );
  }, [category]);

  return state;
};

export default UseFetchGifs;
