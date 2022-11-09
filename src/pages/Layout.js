import { Outlet, Link } from "react-router-dom";
import styles from './styles.module.css';

const Layout = () => {
  return (
    <>
    <home>
      <div className={styles.bar}>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
            <ul class="navbar-nav">
              <li class="nav-item mx-2">
                <Link class="nav-link" to="/">Tufts' Bicycle</Link>
              </li>
              <li class="nav-item mx-2">
                <Link class="nav-link" to="/about">About Us</Link>
              </li>
              <li class="nav-item mx-2">
                <Link class="nav-link" to="/blog">Blog</Link>
              </li>  
            </ul>
          </div>
             <form class="form-inline mx-3">
                <button>
                    <Link class="nav-link" to="/shop"><strong>Shop</strong></Link>
                </button>
            </form>         
        </nav>
      </div>
    </home>
    <Outlet />
    </>
  )
};

export default Layout;