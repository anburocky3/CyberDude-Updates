type InputProps = {
  type?: string;
  placeholder: string;
  icon?: JSX.Element;
};

const Input = ({ type = "text", placeholder, icon }: InputProps) => {
  return (
    <div className="relative">
      <input
        type={type}
        placeholder={placeholder}
        className="border pl-10 pr-4 py-2 rounded outline-none focus:border focus:bg-gray-50"
      />{" "}
      <div className="absolute top-3 left-4 text-gray-500">{icon}</div>
    </div>
  );
};

export default Input;
