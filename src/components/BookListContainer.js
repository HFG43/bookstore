import BookItem from "./BookItem";
import { books } from "./Books";

const BookListContainer = () => {
  return (
    <>
      {books.map((book) => (<BookItem books={book} />))}
    </>
  )
}
export default BookListContainer;