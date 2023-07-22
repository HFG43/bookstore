import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';
import userLogo from './Assets/User_Icon.svg';

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
      <div className={styles.icon_container}>
        <span>
          <img className={styles.navbar_user_icon} alt="User Icon" src={userLogo} />
        </span>
      </div>
    </div>
  </>
);
export default NavBar;
