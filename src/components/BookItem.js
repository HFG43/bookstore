const BookItem = ({ books }) => {
    console.log(books)
    return (
      <>
      <h3>{books.category}</h3>
      <h2>{books.title}</h2>
      <h3>{books.author}</h3>
      <span>{books.comments}</span>
      <button><span>{books.remove}</span></button>
      <button><span>{books.edit}</span></button>
      </>
    )     
}
export default BookItem;