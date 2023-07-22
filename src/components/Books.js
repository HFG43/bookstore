import BookListContainer from './BookListContainer';
import AddBookForm from './AddBookForm';
import styles from './Books.module.css';

const Books = () => (
  <>
    <div className={styles.books_container}>
      <BookListContainer />
      <AddBookForm />
    </div>
  </>
);
export default Books;
