import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Input } from '../atoms/Input';
import { Label } from '../atoms/Label';
export const InputField = ({ label, name, type = 'text', value, onChange }) => (_jsxs("div", { className: "mb-4", children: [_jsx(Label, { htmlFor: name, children: label }), _jsx(Input, { id: name, name: name, type: type, value: value, onChange: onChange })] }));
