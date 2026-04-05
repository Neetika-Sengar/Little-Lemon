import { Button as ButtonComponent } from '@mui/material';

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
}

const Button: React.FC<ButtonProps> = ({
  disabled,
  label,
  variant = 'text',
  color = 'success',
  onClick,
}: ButtonProps) => {
  return (
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
  );
};

export default Button;
