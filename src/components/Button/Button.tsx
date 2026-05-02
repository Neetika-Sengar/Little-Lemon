import { Button as ButtonComponent } from '@mui/material';
import { Link } from 'react-router-dom';

interface ButtonProps {
  label: string;
  disabled: boolean;
  variant?: 'text' | 'outlined' | 'contained';
  color?:
    | 'success'
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'warning';
  onClick?: () => void;
  path?: string;
  type?: 'button' | 'submit';
}

const Button: React.FC<ButtonProps> = ({
  type = 'button',
  disabled,
  label,
  variant = 'text',
  color = 'success',
  path = '/',
  onClick,
}: ButtonProps) => {
  const button = (
    <ButtonComponent
      type={type}
      className="loginButton"
      variant={variant}
      size="medium"
      color={color}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </ButtonComponent>
  );

  return type == 'submit' ? button : <Link to={path}>button</Link>;
};

export default Button;
