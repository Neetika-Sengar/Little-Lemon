import { Link } from 'react-router-dom';
import './Header.scss';
import Navigation from '../../components/Navigation/Navigation';
import Button from '../../components/Button/Button';
import React from 'react';
import { FormControlLabel, Switch } from '@mui/material';

type HeaderProps = {
  onChaosTrigger: (msg: string) => void;
  slayMode: boolean;
  setSlayMode: (v: boolean) => void;
};

const Header: React.FC<HeaderProps> = ({
  onChaosTrigger,
  slayMode,
  setSlayMode,
}) => {
  return (
    <header className="header">
      <Link to="/">
        <img
          className={`logo ${slayMode ? 'spin' : ''}`}
          src="logo.png"
          alt="A Lemon Image"
          width="150"
          height="55"
        />
      </Link>

      <Navigation onChaosTrigger={onChaosTrigger} />
      <div>
        <FormControlLabel
          label="Slay Mode 💅"
          control={
            <Switch
              color="error"
              checked={slayMode}
              onChange={(e) => setSlayMode(e.target.checked)}
            />
          }
        />
        <Button disabled={true} label="Login"></Button>
      </div>
    </header>
  );
};

export default Header;
