import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Link to="/">
        Home
        {/* <img src="logo.png" /> */}
      </Link>
    </header>
  );
};

export default Header;
