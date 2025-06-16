import { jsx as _jsx } from "react/jsx-runtime";
export const Button = ({ variant = 'primary', ...props }) => {
    const base = 'px-4 py-2 rounded font-semibold';
    const styles = variant === 'primary'
        ? 'bg-blue-600 text-white hover:bg-blue-700'
        : 'bg-gray-200 text-black hover:bg-gray-300';
    return _jsx("button", { ...props, className: `${base} ${styles}` });
};
