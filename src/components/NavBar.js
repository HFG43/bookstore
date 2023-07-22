import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar = () => (
  <>
    <div className={styles.navbar}>
      <h1>Bookstore CMS</h1>
      <ul>
        <li>
          <Link to="/">BOOKS</Link>
        </li>
        <li>
          <Link to="/category">CATEGORY</Link>
        </li>
      </ul>
      <span>
        <img className={styles.navbar_user_icon} alt="User Icon" src="#" />
      </span>
    </div>
  </>
);
export default NavBar;
