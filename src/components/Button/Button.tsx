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
}

const Button: React.FC<ButtonProps> = ({
  disabled,
  label,
  variant = 'text',
  color = 'success',
  path = '/',
  onClick,
}: ButtonProps) => {
  return (
    <Link to={path}>
      <ButtonComponent
        className="loginButton"
        variant={variant}
        size="medium"
        color={color}
        disabled={disabled}
        onClick={onClick}
      >
        {label}
      </ButtonComponent>
    </Link>
  );
};

export default Button;
