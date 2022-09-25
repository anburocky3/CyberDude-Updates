type Props = {
  type: "error" | "success" | "info";
  message: string;
};

const InputError = ({ type = "error", message }: Props) => {
  const getStyles = "mt-2 ml-1 text-xs text-red-500";
  return <p className={getStyles}>{message}</p>;
};

export default InputError;
