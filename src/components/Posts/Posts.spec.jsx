import { render, screen } from '@testing-library/react';
import { Posts } from '.';

const props = {
  posts: [
    {
      id: 1,
      title: 'Title 1',
      body: 'body 1',
      cover: 'img/img1',
    },
    {
      id: 2,
      title: 'Title 2',
      body: 'body 2',
      cover: 'img/img2',
    },
    {
      id: 3,
      title: 'Title 3',
      body: 'body 3',
      cover: 'img/img3',
    },
  ],
};

describe('<Posts />', () => {
  it('should render posts', () => {
    render(<Posts {...props} />);

    expect(screen.getAllByRole('heading', { name: /title/i })).toHaveLength(3);
    expect(screen.getAllByRole('img', { name: /title/i })).toHaveLength(3);
    expect(screen.getAllByText(/body/i)).toHaveLength(3);
    expect(screen.getByRole('img', { name: /title 3/i })).toHaveAttribute('src', 'img/img3');
  });

  it('should not render posts', () => {
    render(<Posts />);

    expect(screen.queryByRole('heading', { name: /title/i })).not.toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = render(<Posts {...props} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
