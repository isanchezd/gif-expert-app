const SearchGifsRepository = async (criteria) => {
  const url = `${process.env.REACT_APP_API_URL}/gifs/search?api_key=${
    process.env.REACT_APP_API_KEY
  }&q=${encodeURI(criteria)}&limit=10`;
  const response = await fetch(url);
  const { data } = await response.json();

  return data;
};

export default SearchGifsRepository;
