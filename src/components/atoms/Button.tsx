type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
};

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', ...props }) => {
  const base = 'px-4 py-2 rounded font-semibold';
  const styles = variant === 'primary' 
    ? 'bg-blue-600 text-white hover:bg-blue-700'
    : 'bg-gray-200 text-black hover:bg-gray-300';

  return <button {...props} className={`${base} ${styles}`} />;
};