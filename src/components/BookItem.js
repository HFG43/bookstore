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
        <div className={styles.book_item_primary_data_container}>
          <div className={styles.book_item_primary_data}>
            <h3 className={styles.book_item_primary_data_category}>
              {books.category}
            </h3>
            <h2 className={styles.book_item_primary_data_title}>
              {books.title}
            </h2>
            <h3 className={styles.book_item_primary_data_author}>
              {books.author}
            </h3>
          </div>
          <div className={styles.book_item_complementary_buttons_container}>
            <span>Comments</span>
            <i>|</i>
            <button className={styles.remove} type="button" onClick={handleRemoveBook}>
              <span>Remove</span>
            </button>
            <i>|</i>
            <button className={styles.edit} type="button">
              <span>Edit</span>
            </button>
          </div>
        </div>
        <div className={styles.advance_graph_container}>
          <svg viewBox="0 0 36 36" className={styles.circular_chart}>
            <path
              className={styles.circle_background}
              d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className={styles.circle}
              strokeDasharray="70, 100"
              d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
        </div>
        <div className={styles.percentage_container}>
          <div className={styles.percentage_number}>
            <p>{Math.floor(Math.random() * 99) + 1}</p>
            <span>%</span>
          </div>
          <span className={styles.percentage_completed}>Completed</span>
        </div>
        <div className={styles.divisor_container}>
          <div className={styles.divisor} />
        </div>
        <div className={styles.current_chapter_container}>
          <h3>CURRENT CHAPTER</h3>
          <h2>Chapter 15</h2>
          <div>UPDATE PROGRESS</div>
        </div>
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
