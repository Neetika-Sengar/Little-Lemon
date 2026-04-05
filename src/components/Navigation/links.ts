export interface NavigationItem {
  label: string;
  path: string;
  icon: string;
}

export type NavigationLink = Array<NavigationItem>;

const NavigationMenu: NavigationLink = [
  { label: 'Home', icon: '', path: '/' },
  { label: 'Reserve', icon: '', path: '/reserve' },
  { label: 'About Us', icon: '', path: '/aboutus' },
  { label: 'Contact', icon: '', path: '/contact' },
];

export default NavigationMenu;
