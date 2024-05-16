import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { TextInput } from '.';

describe('<TextInput />', () => {
  it('should have a value of searchValue', () => {
    const fn = jest.fn;
    render(<TextInput handleChange={fn} searchValue={'Testando'} />);
    const input = screen.getByPlaceholderText(/type your search/i);
    expect(input).toBeInTheDocument();
    expect(input.value).toBe('Testando');
  });

  it('should call handlechange function on each key pressed', () => {
    const fn = jest.fn();
    render(<TextInput handleChange={fn} searchValue="um valor qualquer" />);
    const input = screen.getByPlaceholderText(/type your search/i);
    const value = 'O valor';
    userEvent.type(input, value);
    expect(input.value).toBe('um valor qualquer');
    expect(fn).toHaveBeenCalledTimes(value.length);
  });

  it('should match snapshot', () => {
    const fn = jest.fn();
    const { container } = render(<TextInput handleChange={fn} searchValue="" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
