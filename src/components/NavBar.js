import { Link } from 'react-router-dom';
// import styles from './navbar.module.css';

const NavBar = () => {
  return (
    <>
      <h1>Bookstore CMS</h1>
      <ul>
        <li><Link to="/">BOOKS</Link></li>
        <li><Link to="/category">CATEGORY</Link></li>
      </ul>
      <span><img alt="#" src="#"></img></span>
    </>
  )
}
export default NavBar;