import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/bookSlice';
import styles from './BookItem.module.css';

const BookItem = ({ books }) => {
  const remove = useSelector(removeBook);
  const dispatch = useDispatch();
  return (
    <>
      <div className={styles.book_item}>
        <h3>{books.category}</h3>
        <h2>{books.title}</h2>
        <h3>{books.author}</h3>
        <span>{books.comments}</span>
        <button
          type="button"
          aria-label="Remove Book"
          onClick={() => dispatch(remove)}
        >
          <span>{books.remove}</span>
        </button>
        <button type="button">
          <span>{books.edit}</span>
        </button>
      </div>
    </>
  );
};

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
