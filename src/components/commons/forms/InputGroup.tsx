import Input from "./Input";

type InputGroupProps = {
  id: string;
  label: string;
  name: string;
  value: string;
  type?: string;
  placeholder: string;
  icon?: JSX.Element;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  children?: JSX.Element;
};

const InputGroup = ({
  id,
  label,
  name,
  value,
  type,
  placeholder,
  onChange,
  required,
  children,
}: InputGroupProps) => {
  return (
    <div>
      <label htmlFor={id} className="text-gray-600">
        {label}
        {required ? <span className="mx-1 text-red-500">*</span> : ""}
        {children}
      </label>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        className="mt-1"
        onChange={onChange}
        name={name}
        value={value}
        required={required}
        error={""}
      />
    </div>
  );
};

export default InputGroup;
