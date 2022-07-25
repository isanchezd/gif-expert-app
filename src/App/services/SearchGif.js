import searchGifs from '../repositories/GiphyRepository';

const SearchGifs = async (criteria) => {
  const gifs = await searchGifs(criteria);

  return gifs.map((gif) => {
    return {
      id: gif.id,
      title: gif.title,
      url: gif.images?.downsized_medium.url,
    };
  });
};

export default SearchGifs;
