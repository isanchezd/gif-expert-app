import { render, screen } from '@testing-library/react';
import GifGrid from '../../../App/components/GifGrid/GifGrid';
import useFetchGifs from '../../../App/hooks/useFetchGifs';

jest.mock('../../../App/hooks/useFetchGifs');

describe('GifGrid component', () => {
  test('When the useFectch is loading the loader should be in the DOM and the gifList not', () => {
    const category = 'naruto';

    useFetchGifs.mockReturnValue({
      loading: true,
      data: [],
    });
    render(<GifGrid category={category}></GifGrid>);

    const loader = screen.getByTestId('loader');
    const gifList = screen.getByTestId('gif-list');

    expect(loader).toBeInTheDocument();
    // eslint-disable-next-line testing-library/no-node-access
    expect(gifList).toBeEmptyDOMElement();
  });

  test('When the useFetch have data the gitList should be in the dom', () => {
    const category = 'naruto';

    useFetchGifs.mockReturnValue({
      loading: false,
      data: [
        {
          id: '1',
          title: 'test',
          url: 'http://exampple.com',
        },
      ],
    });
    render(<GifGrid category={category}></GifGrid>);

    const gifList = screen.getByTestId('gif-list');

    // eslint-disable-next-line testing-library/no-node-access
    expect(gifList).toBeTruthy();
  });
});
