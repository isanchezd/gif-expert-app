import { render, screen, fireEvent } from '@testing-library/react';
import AddCategory from '../../../App/components/AddCategory/AddCategory';

describe('AddCategory component', () => {
  test('when the form is submitted the state should be refresh', () => {
    const mockValue = 'naruto';
    const setCategory = jest.fn();

    render(<AddCategory setCategories={setCategory}></AddCategory>);

    const input = screen.getByTestId('input');
    const form = screen.getByTestId('form');

    fireEvent.change(input, { target: { value: mockValue } });
    fireEvent.submit(form);

    expect(setCategory).toHaveBeenCalled();
  });
});
