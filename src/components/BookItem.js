import PropTypes from 'prop-types';

const BookItem = ({ books }) => (
  <>
    <h3>{books.category}</h3>
    <h2>{books.title}</h2>
    <h3>{books.author}</h3>
    <span>{books.comments}</span>
    <button type="button">
      <span>{books.remove}</span>
    </button>
    <button type="button">
      <span>{books.edit}</span>
    </button>
  </>
);

BookItem.propTypes = {
  books: PropTypes.shape({
    id: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    comments: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    remove: PropTypes.string.isRequired,
    edit: PropTypes.string.isRequired,
  }).isRequired,
};
export default BookItem;
