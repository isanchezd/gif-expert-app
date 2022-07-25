import UseFetchGifs from '../../hooks/UseFetchGifs';
import GifItem from '../GifItem/GifItem';

const GifGrid = ({ category }) => {
  const { loading, data: images } = UseFetchGifs(category);

  return (
    <>
      <h3 className='animate__animated animate__fadeIn'>{category}</h3>
      {loading && (
        <span data-testid='loader' className='animate__animated animate_flash'>
          loading
        </span>
      )}
      <div data-testid='gif-list' className='card-grid'>
        {images.map((image) => (
          <GifItem key={image.id} {...image}></GifItem>
        ))}
      </div>
    </>
  );
};

export default GifGrid;
