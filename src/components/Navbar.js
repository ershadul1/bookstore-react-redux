import user from '../assests/images/user.svg';

const Navbar = () => (
  <>
    <nav>
      <div className="nav-items-container">
        <div className="nav-items-left">
          <div className="nav-bookstore-cms">
            Bookstore CMS
          </div>
          <div className="nav-books">BOOKS</div>
          <div className="nav-categories">CATEGORIES</div>
        </div>
        <div className="nav-items-right">
          <img src={user} alt="profile-pic" className="profile-pic" />
        </div>
      </div>
    </nav>
  </>
);

export default Navbar;
