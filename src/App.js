import './App.css';
import { Route, Routes } from 'react-router-dom';
import Books from './components/Books';
import Category from './components/Category';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/category" element={<Category />} />
      </Routes>
    </>
  );
}

export default App;
