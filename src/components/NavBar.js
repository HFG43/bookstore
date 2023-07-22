import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';
import userCircle from './Assets/userLogo.svg';

const NavBar = () => (
  <>
    <div className={styles.navbar}>
      <div className={styles.navbar_list_container}>
        <h1>Bookstore CMS</h1>
        <ul>
          <li>
            <Link to="/">BOOKS</Link>
          </li>
          <li>
            <Link to="/category">CATEGORY</Link>
          </li>
        </ul>
      </div>
      <button type="button" className={styles.icon_container}>
        <img className={styles.navbar_user_icon_circle} alt="User Icon" src={userCircle} />
      </button>
    </div>
  </>
);
export default NavBar;
