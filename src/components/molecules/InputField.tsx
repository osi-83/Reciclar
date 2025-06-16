import { Input } from '../atoms/Input';import { Label } from '../atoms/Label';

type InputFieldProps = {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const InputField: React.FC<InputFieldProps> = ({ label, name, type = 'text', value, onChange }) => (
  <div className="mb-4">
    <Label htmlFor={name}>{label}</Label>
    <Input id={name} name={name} type={type} value={value} onChange={onChange} />
  </div>
);