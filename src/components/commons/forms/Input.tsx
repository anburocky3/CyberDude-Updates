import { useRef, useState } from "react";
import CarbonPassword from "~icons/carbon/password";
import BiEye from "~icons/bi/eye";
import BiEyeSlash from "~icons/bi/eye-slash";
import InputError from "./InputError";
type InputProps = {
  id: string;
  type?: string;
  name: string;
  placeholder: string;
  icon?: JSX.Element;
  className?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required: boolean | undefined;
  error: string;
};

const Input = ({
  id,
  type = "text",
  name,
  placeholder,
  icon,
  className,
  value,
  onChange,
  required,
  error,
}: InputProps) => {
  const padding = icon ? "pl-10" : "pl-4";
  const styles = `w-full border ${padding} pr-4 py-2 rounded outline-none focus:border focus:bg-gray-50 ${className}`;

  const [inputType, setInputType] = useState(type);

  const togglePassword = () => {
    if (inputType === "password") {
      setInputType("text");
      return;
    }
    setInputType("password");
  };
  return (
    <div className="relative">
      <input
        type={inputType}
        placeholder={placeholder}
        className={styles}
        value={value}
        name={name}
        onChange={onChange}
        required={required}
      />
      {type === "password" &&
        (inputType === "password" ? (
          <BiEye
            className="absolute top-4 right-3 text-gray-500 cursor-pointer"
            onClick={() => togglePassword()}
          />
        ) : (
          <BiEyeSlash
            className="absolute top-4 right-3 text-gray-500 cursor-pointer"
            onClick={() => togglePassword()}
          />
        ))}
      {icon && (
        <div className="absolute top-3 left-4 text-gray-500">{icon}</div>
      )}
      <InputError type={"error"} message={error} />
    </div>
  );
};

export default Input;
