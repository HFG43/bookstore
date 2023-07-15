import { useState } from 'react';
// import styles from './navbar.module.css';

const AddBookForm = () => {
  const [bookName, setBookName] = useState('');
  const [authorName, setAuthorName] = useState('');

  const handleNameChange = (name) => {
    setBookName(name.target.value);
  };

  const handleAuthorChange = (author) => {
    setAuthorName(author.target.value);
  };

  return (
    <>
    <h2>ADD NEW BOOK</h2>
    <form>
      <input type="text" placeholder='Book Title' value={bookName} onChange={handleNameChange} />
      <input type="text" placeholder='Author' value={authorName} onChange={handleAuthorChange} />
      <button type="submit">ADD BOOK</button>
    </form>    
    </>
  );
};
export default AddBookForm;
