import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBooks } from '../redux/books/bookSlice';
import styles from './BookItem.module.css';

const BookItem = ({ books }) => {
  const dispatch = useDispatch();
  const handleRemoveBook = () => {
    dispatch(removeBooks(books.item_id));
  };
  return (
    <>
      <div className={styles.book_item}>
        <h3>{books.category}</h3>
        <h2>{books.title}</h2>
        <h3>{books.author}</h3>
        <span>Comments</span>
        <button type="button" onClick={handleRemoveBook}>
          <span>Remove</span>
        </button>
        <button type="button">
          <span>Edit</span>
        </button>
      </div>
    </>
  );
};

BookItem.propTypes = {
  books: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};
export default BookItem;
