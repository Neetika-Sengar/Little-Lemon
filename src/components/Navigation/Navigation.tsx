import { NavLink } from 'react-router-dom';
import NavigationMenu from './links';
import './Navigation.scss';

type NavBarProps = { onChaosTrigger: (msg: string) => void };

const chaosMessages = [
  'okay slay I guess 💅',
  'yaaaassss queen 💅',
  'not you just ordering me around 😤',
  'not you doing that... kinda iconic tho 😭',
  'main character energy?? we see you 👀',
  'you really said ‘watch me’ and did it huh',
  'this was unnecessary but I respect it 💀',
  'go off I guess 🚶‍♀️',
  'honestly… that ate 😤',
  'you did that. no notes.',
  'lowkey impressive not gonna lie 👀',
  'who gave you this much confidence 😭',
  'you’re just clicking things and I love that for you',
  'chaotic but effective. respect.',
  'this app fears you 💀',
  'you’re the problem and the solution 😌',
];

const Navigation: React.FC<NavBarProps> = ({ onChaosTrigger }) => {
  const handleNavClick = () => {
    const random =
      chaosMessages[Math.floor(Math.random() * chaosMessages.length)];
    onChaosTrigger(random);
  };

  return (
    <nav>
      <ul className="list">
        {NavigationMenu.map((item) => {
          return (
            <li key={item.label}>
              <NavLink
                to={item.path}
                onClick={handleNavClick}
                className={({ isActive }) => {
                  return isActive ? 'active link' : 'link';
                }}
              >
                {item.label}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
