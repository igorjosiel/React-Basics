import PropTypes from 'prop-types';
import './styles.css';

export const PostCard = ({ title, body, id, cover }) => (
  <div className="post">
    <img src={cover} alt={title} />

    <div key={id} className="post-content">
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  </div>
);

PostCard.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  cover: PropTypes.string.isRequired,
};
