import BookListContainer from "./BookListContainer";
import AddBookForm from "./AddBookForm";

export const Books = () => {
return (
  <>
    <BookListContainer />
    <AddBookForm /> 
  </>
)
}

export const books = [
  {
    id: 1,
    category: 'Action',
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    comments: 'Comments',
    remove: 'Remove',
    edit: 'Edit',
    completed: false,  
  },
  {
    id: 2,
    category: 'Science Fiction',
    title: 'Dune',
    author: 'Frank Herbert',
    comments: 'Comments',
    remove: 'Remove',
    edit: 'Edit',
    completed: false,
  },
  {
    id: 3,
    category: 'Economy',
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
    comments: 'Comments',
    remove: 'Remove',
    edit: 'Edit',
    completed: false,
  },
]