import React from 'react';
import NavigationMenu from '../../components/Navigation/links';
import { NavLink } from 'react-router-dom';
import './Footer.scss';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footerColumns">
          <section>
            <img src="/logo-vertical.png" alt="Little Lemon Logo" width="100" />
          </section>

          <section>
            <h2>Navigation</h2>
            <nav>
              <ul>
                {NavigationMenu.map((item, index) => {
                  return (
                    <li key={item.label + index}>
                      <NavLink to={item.path}>{item.label}</NavLink>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </section>

          <section>
            <h2>Contact</h2>

            <address>
              <p>12 Lemon St.</p>
              <p>Lemon City, LC 12345</p>
              <p>
                <a href="tel:+821234567890">+82-123-456-7890</a>
              </p>
              <p>
                <a href="mailto:someone@little-lemon-team.com">
                  someone@little-lemon-team.com
                </a>
              </p>
            </address>
          </section>
        </div>

        <small>&copy; {year} Little Lemon</small>
      </div>
    </footer>
  );
};

export default Footer;
