import { jsx as _jsx } from "react/jsx-runtime";
export const AuthTemplate = ({ children }) => {
    return (_jsx("div", { className: "min-h-screen flex items-center justify-center bg-gray-100", children: _jsx("div", { className: "bg-white p-8 rounded shadow-md w-full max-w-md", children: children }) }));
};
